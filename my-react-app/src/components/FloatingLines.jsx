import { useEffect, useRef } from 'react'

const FloatingLines = ({
  linesGradient = ["#6366f1", "#2F4BC0", "#8b5cf6", "#a855f7"],
  enabledWaves = ['top', 'middle', 'bottom'],
  lineCount = 5,
  lineDistance = 5,
  animationSpeed = 1,
  interactive = true,
  bendRadius = 5,
  bendStrength = -0.5,
  mouseDamping = 0.05
}) => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef(null)
  const linesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initLines()
    }

    const initLines = () => {
      linesRef.current = []
      
      enabledWaves.forEach((waveType, waveIndex) => {
        const waveY = waveType === 'top' ? canvas.height * 0.25 : 
                     waveType === 'middle' ? canvas.height * 0.5 : 
                     canvas.height * 0.75
        
        for (let i = 0; i < lineCount; i++) {
          const lineY = waveY + (i - Math.floor(lineCount / 2)) * lineDistance * 8
          
          linesRef.current.push({
            baseY: lineY,
            currentY: lineY,
            color: linesGradient[waveIndex % linesGradient.length],
            waveType,
            lineIndex: i
          })
        }
      })
    }

    const drawLine = (line) => {
      const points = []
      const segments = 50
      
      // Generate points along the line with subtle wave motion
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * canvas.width
        
        // Base wave shape (subtle)
        let y = line.baseY + Math.sin((x * 0.005) + (Date.now() * 0.001)) * 8
        
        // Mouse interaction - stronger bend when mouse is near
        if (interactive) {
          const distanceToMouse = Math.sqrt(
            Math.pow(x - mouseRef.current.x, 2) + 
            Math.pow(y - mouseRef.current.y, 2)
          )
          
          if (distanceToMouse < bendRadius * 30) {
            const influence = Math.max(0, (bendRadius * 30 - distanceToMouse) / (bendRadius * 30))
            const bendAmount = influence * bendStrength * 80
            y += bendAmount
          }
        }
        
        points.push({ x, y })
      }
      
      // Draw the line with glow effect
      ctx.strokeStyle = line.color
      ctx.lineWidth = 2
      ctx.shadowColor = line.color
      ctx.shadowBlur = 15
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      
      // Draw smooth curve through points
      for (let i = 1; i < points.length - 1; i++) {
        const current = points[i]
        const next = points[i + 1]
        const controlX = (current.x + next.x) / 2
        const controlY = (current.y + next.y) / 2
        
        ctx.quadraticCurveTo(current.x, current.y, controlX, controlY)
      }
      
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y)
      ctx.stroke()
      
      // Additional glow
      ctx.shadowBlur = 25
      ctx.lineWidth = 1
      ctx.strokeStyle = line.color + '60'
      ctx.stroke()
      
      ctx.shadowBlur = 0
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      linesRef.current.forEach(line => {
        drawLine(line)
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove)
      canvas.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [linesGradient, enabledWaves, lineCount, lineDistance, interactive, bendRadius, bendStrength])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: interactive ? 'auto' : 'none',
        mixBlendMode: 'screen'
      }}
    />
  )
}

export default FloatingLines