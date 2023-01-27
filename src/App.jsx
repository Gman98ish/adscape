import './App.css'

const HatsuneNiku = props => <div className='min-w-[250px]'>
  <div className="border-2 border-yellow-300 rounded p-2 max-height-full">
    <p className="font-chakra text-yellow-300">Only 30% synthetic meat at</p>
    <h3 className="text-white text-5xl text-center animate-[glow_1s_ease-in-out_infinite_alternate]">ハツネ肉</h3>
  </div>
</div>


const DrBobert = props => <div className="text-white font-chakra max-w-[350px] w-screen md:w-auto mx-4">
  <div className="mb-2">
    <h3 className="text-4xl">No Insurance?</h3>
    <h3 className="text-4xl">No Money?</h3>
    <h3 className="text-4xl">No Problem!</h3>
  </div>
  <div className="mb-3">
    <p className='text-2xl text-justify'>"Dr" Bobert will see you now, for a low interest loan!</p>
  </div>
  <p className='font-mono text-xs text-justify'>10000% APR. Failure to repay loan will result in organ reposession. Failure to provide organs will result in blood reposession.</p>
</div>

const Scroller = props => <div className={`w-full overflow-hidden ${props.className}`}>
  <div className="flex animate-[scroll_30s_linear_infinite] w-fit md:w-full" style={{transformBox: 'content-box'}}>
    {[1,2].map(i => <div key={i} className="md:min-w-full min-w-min flex justify-between">
      {props.children}
    </div>)}
  </div>
</div>

function App() {
  return (
    <div className="min-h-screen bg-black pt-8">
      <Scroller>
        <HatsuneNiku />
        <DrBobert />
      </Scroller>
    </div>
  )
}

export default App
