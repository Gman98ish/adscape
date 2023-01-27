import './App.css'

const HatsuneNiku = props => <div className='min-w-[250px] mx-4 '>
  <div className="border-2 border-yellow-300 rounded p-2 max-height-full">
    <p className="font-chakra text-yellow-300 text-center">Only 30% synthetic meat at</p>
    <h3 className="text-white text-5xl text-center animate-[glow_1s_ease-in-out_infinite_alternate]">ハツネ肉</h3>
  </div>
</div>

const Coffee = props => <div className='mx-4 text-cyan-500 font-chakra animate-bounce pt-24'>
  <div className="flex items-center">
    <svg className='fill-cyan-500' width="50px" height="50px" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 20V18H17V20H1M2 3H19V4H20V10H19V11H16V14H15V15H14V16H4V15H3V14H2V3M16 5V9H18V5H16M4 5V13H5V14H13V13H14V5H4Z" />
    </svg>
    <h3 className='text-3xl pl-4'>Caffiene 2.0</h3>
  </div>
  <div className='pt-4'>
    <div className="flex justify-between font-mono">
      <p>Americano</p>
      <p>300円</p>
    </div>
    <div className="flex justify-between font-mono">
      <p>Latte</p>
      <p>1200円</p>
    </div>
    <div className="flex justify-between font-mono">
      <p>House Special</p>
      <p>3,000円</p>
    </div>
    <div className='mt-8 text-right'>
      <div className="bg-cyan-500 px-2 py-1 text-black font-mono inline-block">ORDER NOW</div>
    </div>
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
    {[1,2].map(i => <div key={i} className="md:min-w-full min-w-min flex">
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
        <Coffee />
      </Scroller>
    </div>
  )
}

export default App
