import UIKit

class NitroGlassContainer: UIVisualEffectView {
    var spacing:Double = 0 
    override init(effect: UIVisualEffect?) {
        super.init(effect: nil)
        setupView()
    }
    
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupView()
    }
    
    public override func layoutSubviews() {
        super.layoutSubviews()
    }
    
    func setupView() {
        if #available(iOS 26.0, *) {
            let effect = UIGlassContainerEffect()
            effect.spacing = CGFloat(spacing)
            self.effect = effect
        } else {
            self.effect = UIBlurEffect(style: .systemMaterial)
        }
        
        
    }
    

}
