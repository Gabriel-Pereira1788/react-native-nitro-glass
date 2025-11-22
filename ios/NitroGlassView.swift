

class NitroGlassView:UIVisualEffectView {
    private var isFirstMount: Bool = true
    var viewEffect: Effect = .clear
    var interactive: Bool = false
    var viewTintColor:String?
    
    public override func layoutSubviews() {
        if (self.effect != nil) { return }
        setupView()
        
        if isFirstMount {
            isFirstMount = false
        }
    }
    
    
    func setupView() {
        guard #available(iOS 26.0, *) else {
            return
        }
    
        
        let glassEffect = UIGlassEffect(style: buildStyleByEffect(viewEffect: viewEffect))
        glassEffect.isInteractive = interactive
        
        if(viewTintColor != nil) {
            glassEffect.tintColor = UIColor(hex: viewTintColor!)
        } else {
            glassEffect.tintColor = .none
        }
        
        
        if isFirstMount {
            self.effect = glassEffect
        } else {
            // Animate only the effect is changed after first mount.
            UIView.animate { self.effect = glassEffect }
        }
    }
    
    @available(iOS 26.0, *)
    func buildStyleByEffect(viewEffect:Effect) -> UIGlassEffect.Style {
        switch viewEffect {
        case .regular:
            return .regular
        case .clear:
            return .clear
        default:
            return .regular
        }
    }
}
