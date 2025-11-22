import Foundation
import UIKit

class HybridNitroGlassView : HybridNitroGlassViewSpec {
    var interactive: Bool = false {
        didSet {
            glassView.interactive = interactive
            glassView.setupView()
        }
    }
    var effect: Effect = .clear {
        didSet {
            glassView.viewEffect = effect
            glassView.setupView()
        }
    }
    
    var tintColor:String? {
        didSet {
            glassView.viewTintColor = tintColor
            glassView.setupView()
        }
    }
    
    var view: UIView
    var glassView = NitroGlassView()
    
    override init() {
        self.interactive = false
        self.effect = .clear
        
        self.view = glassView
    }

  // Props
  var isRed: Bool = false
}
