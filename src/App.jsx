import './App.css'

const HatsuneNiku = props => <div className="border-2 border-yellow-300 rounded p-2">
  <p className="font-chakra text-yellow-300">Only 30% synthetic meat at</p>
  <h3 className="text-white text-5xl text-center animate-[glow_1s_ease-in-out_infinite_alternate]">ハツネ肉</h3>
</div>

const Scroller = props => <div className={`w-full overflow-hidden ${props.className}`}>
  <div className="w-full flex animate-[scroll-animation_30s_linear_infinite]">
    {[1,2].map(i => <div key={i} className="pr-20 box-border min-w-full flex justify-between">
      {props.children}
    </div>)}
  </div>
</div>

function App() {
  return (
    <div className="min-h-screen bg-black pt-8">
      <Scroller>
        <HatsuneNiku />
      </Scroller>
    </div>
  )
}

export default App
