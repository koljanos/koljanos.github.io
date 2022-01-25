
import SwiftUI
import PlaygroundSupport

struct ContentView: View {
    var body: some View {
        HStack{
            Image(systemName: "person").resizable().scaledToFit()
            VStack{
                Image(systemName: "pencil").resizable().scaledToFit()
                Image(systemName: "trash.circle").renderingMode(.original).resizable().scaledToFit()
                Image(systemName: "pc").renderingMode(.original).resizable().scaledToFit()
            }
        }
    }
}


PlaygroundPage.current.setLiveView(ContentView())
