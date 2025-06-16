import logging
import sys
from datetime import datetime
from pathlib import Path
from typing import Optional, Union


class ColorFormatter(logging.Formatter):
    """Custom formatter with color support for console output"""
    
    grey = "\x1b[38;21m"
    blue = "\x1b[34m"
    green = "\x1b[32m"
    yellow = "\x1b[33m"
    red = "\x1b[31m"
    bold_red = "\x1b[31;1m"
    reset = "\x1b[0m"
    
    FORMATS = {
        logging.DEBUG: grey + "%(asctime)s - %(name)s - %(levelname)s - %(message)s" + reset,
        logging.INFO: blue + "%(asctime)s - %(name)s - %(levelname)s - %(message)s" + reset,
        logging.WARNING: yellow + "%(asctime)s - %(name)s - %(levelname)s - %(message)s" + reset,
        logging.ERROR: red + "%(asctime)s - %(name)s - %(levelname)s - %(message)s" + reset,
        logging.CRITICAL: bold_red + "%(asctime)s - %(name)s - %(levelname)s - %(message)s" + reset
    }
    
    def format(self, record):
        log_fmt = self.FORMATS.get(record.levelno)
        formatter = logging.Formatter(log_fmt, datefmt='%Y-%m-%d %H:%M:%S')
        return formatter.format(record)


def setup_logger(
    name: str,
    level: Union[int, str] = logging.INFO,
    log_file: Optional[Union[str, Path]] = None,
    console: bool = True,
    file_mode: str = 'a',
    format_string: Optional[str] = None,
    use_color: bool = True
) -> logging.Logger:
    """
    Set up a logger with both file and console handlers
    
    Args:
        name: Logger name
        level: Logging level (e.g., logging.INFO, 'INFO')
        log_file: Path to log file (optional)
        console: Whether to log to console
        file_mode: File open mode ('a' for append, 'w' for overwrite)
        format_string: Custom format string (optional)
        use_color: Whether to use color formatting for console output
        
    Returns:
        Configured logger instance
    """
    logger = logging.getLogger(name)
    logger.setLevel(level)
    
    # Remove existing handlers to avoid duplicates
    logger.handlers = []
    
    # Default format
    if format_string is None:
        format_string = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    
    # Console handler
    if console:
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(level)
        
        if use_color and sys.stdout.isatty():
            console_handler.setFormatter(ColorFormatter())
        else:
            console_formatter = logging.Formatter(format_string, datefmt='%Y-%m-%d %H:%M:%S')
            console_handler.setFormatter(console_formatter)
            
        logger.addHandler(console_handler)
    
    # File handler
    if log_file:
        log_path = Path(log_file)
        log_path.parent.mkdir(parents=True, exist_ok=True)
        
        file_handler = logging.FileHandler(log_path, mode=file_mode, encoding='utf-8')
        file_handler.setLevel(level)
        file_formatter = logging.Formatter(format_string, datefmt='%Y-%m-%d %H:%M:%S')
        file_handler.setFormatter(file_formatter)
        logger.addHandler(file_handler)
    
    return logger


def get_logger(name: str) -> logging.Logger:
    """Get an existing logger or create a basic one"""
    return logging.getLogger(name)


class LoggerAdapter:
    """Adapter class for adding context to log messages"""
    
    def __init__(self, logger: logging.Logger, extra: dict):
        self.logger = logger
        self.extra = extra
    
    def _log(self, level, msg, *args, **kwargs):
        if self.extra:
            kwargs['extra'] = {**self.extra, **kwargs.get('extra', {})}
        getattr(self.logger, level)(msg, *args, **kwargs)
    
    def debug(self, msg, *args, **kwargs):
        self._log('debug', msg, *args, **kwargs)
    
    def info(self, msg, *args, **kwargs):
        self._log('info', msg, *args, **kwargs)
    
    def warning(self, msg, *args, **kwargs):
        self._log('warning', msg, *args, **kwargs)
    
    def error(self, msg, *args, **kwargs):
        self._log('error', msg, *args, **kwargs)
    
    def critical(self, msg, *args, **kwargs):
        self._log('critical', msg, *args, **kwargs)


def log_function_call(func):
    """Decorator to log function calls"""
    def wrapper(*args, **kwargs):
        logger = get_logger(func.__module__)
        logger.debug(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        try:
            result = func(*args, **kwargs)
            logger.debug(f"{func.__name__} returned {result}")
            return result
        except Exception as e:
            logger.error(f"{func.__name__} raised {type(e).__name__}: {e}")
            raise
    return wrapper


def log_execution_time(func):
    """Decorator to log function execution time"""
    import time
    def wrapper(*args, **kwargs):
        logger = get_logger(func.__module__)
        start_time = time.time()
        try:
            result = func(*args, **kwargs)
            execution_time = time.time() - start_time
            logger.info(f"{func.__name__} executed in {execution_time:.3f} seconds")
            return result
        except Exception as e:
            execution_time = time.time() - start_time
            logger.error(f"{func.__name__} failed after {execution_time:.3f} seconds: {e}")
            raise
    return wrapper


# Convenience functions for quick logging
def setup_basic_logger(log_file: Optional[str] = None) -> logging.Logger:
    """Set up a basic logger with sensible defaults"""
    return setup_logger(
        name='app',
        level=logging.INFO,
        log_file=log_file,
        console=True,
        use_color=True
    )


if __name__ == "__main__":
    # Example usage
    logger = setup_logger(
        name="example",
        level=logging.DEBUG,
        log_file="logs/example.log",
        console=True,
        use_color=True
    )
    
    logger.debug("This is a debug message")
    logger.info("This is an info message")
    logger.warning("This is a warning message")
    logger.error("This is an error message")
    logger.critical("This is a critical message")
    
    # Example with decorators
    @log_function_call
    @log_execution_time
    def example_function(x, y):
        import time
        time.sleep(0.1)
        return x + y
    
    result = example_function(5, 3)
    print(f"Result: {result}")