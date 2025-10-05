import './MobileWarning.css'

const MobileWarning = () => {
  return (
    <div className="mobile-warning">
      <div className="mobile-warning-content">
        <div className="warning-icon">
          💻
        </div>
        <h2>Desktop Experience Recommended</h2>
        <p>
          This portfolio is optimized for desktop viewing. 
          Please visit on a PC or laptop for the best experience.
        </p>
        <div className="warning-footer">
          <small>Mobile version coming soon!</small>
        </div>
      </div>
    </div>
  )
}

export default MobileWarning