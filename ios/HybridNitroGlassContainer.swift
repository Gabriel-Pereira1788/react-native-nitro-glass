import UIKit
import Foundation

class HybridNitroGlassContainer: HybridNitroGlassContainerSpec {
    var spacing: Double? {
        didSet {
            nitroGlassContainer.spacing = spacing ?? 0
            nitroGlassContainer.setupView()
        }
    }
    
    var view:UIView
    var nitroGlassContainer = NitroGlassContainer()
    override init() {
        print("INIT-NITRO-CONTAINER")
        self.view = nitroGlassContainer
    }
}
