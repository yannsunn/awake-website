interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
  targetX?: number
  targetY?: number
}

let ctx: OffscreenCanvasRenderingContext2D | null = null
let particles: Particle[] = []
let mouseX = 0
let mouseY = 0
let animationId: number
let width = 800
let height = 600

const colors = ['#ff00de', '#00fff0', '#ff0066', '#ffff00']

self.addEventListener('message', (e) => {
  const { type, ...data } = e.data
  
  switch (type) {
    case 'init':
      initCanvas(data.canvas, data.devicePixelRatio)
      break
    case 'resize':
      width = data.width
      height = data.height
      if (ctx?.canvas) {
        ctx.canvas.width = width
        ctx.canvas.height = height
      }
      break
    case 'mouse':
      mouseX = data.x
      mouseY = data.y
      break
  }
})

function initCanvas(canvas: OffscreenCanvas, dpr: number) {
  ctx = canvas.getContext('2d')
  if (!ctx) return
  
  // パーティクル生成（ネオンカラー）
  const particleCount = 30
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  animate()
}

function animate() {
  if (!ctx) return
  
  ctx.clearRect(0, 0, width, height)
  
  particles.forEach((particle) => {
    if (!ctx) return
    // マウスとの相互作用
    const dx = mouseX - particle.x
    const dy = mouseY - particle.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 100) {
      const force = (100 - distance) / 100
      particle.vx -= (dx / distance) * force * 0.5
      particle.vy -= (dy / distance) * force * 0.5
    }
    
    // 位置更新
    particle.x += particle.vx
    particle.y += particle.vy
    
    // 画面端で反転
    if (particle.x < 0 || particle.x > width) particle.vx *= -1
    if (particle.y < 0 || particle.y > height) particle.vy *= -1
    
    // 速度減衰
    particle.vx *= 0.99
    particle.vy *= 0.99
    
    // 描画（ネオングロウ効果）
    ctx.globalAlpha = particle.opacity
    ctx.shadowBlur = 20
    ctx.shadowColor = particle.color
    
    // グラデーション
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.radius * 3
    )
    gradient.addColorStop(0, particle.color)
    gradient.addColorStop(1, 'transparent')
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
    ctx.fill()
    
    // 中心の明るい点
    ctx.globalAlpha = 1
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2)
    ctx.fill()
  })
  
  // 近接パーティクル間の接続線
  if (!ctx) return
  ctx.globalAlpha = 0.2
  ctx.strokeStyle = '#ff00de'
  ctx.lineWidth = 1
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 150) {
        ctx.globalAlpha = (1 - distance / 150) * 0.3
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
  
  animationId = requestAnimationFrame(animate)
}