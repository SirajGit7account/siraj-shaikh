import Card1 from '../components/card-1'
import GridLine from '../components/GridLine'
import HeaderText from '../components/HeaderText'
import NameText from '../components/NameText'
import TitleText from '../components/TitleText'
import NavMenu from '../navigation/nav-menu' 
import GithubGraph from '../components/github-graph'

export default function MainGrid() {
  return (
    <>
      {/* navbar - fixed */}
      <div className="sticky top-10 z-[120]">
        <GridLine orientation="horizontal" position="top-10" isFixed={true} />
        <NavMenu position="top-[18px]" isFixed={true} orderoflinks={['Blogs', 'Experience', 'Recommendations', 'Email', 'Github']} />
      </div>
      {/* banner space*/}
      <GridLine orientation="horizontal" position="top-80" />

      <HeaderText className="top-[380px] left-[34%]" />
      <GridLine orientation="horizontal" position="top-100" className="left-[32.75%] w-[603.25px]" />
      <NameText className="top-[405px] left-[34%]" /> 
      <GridLine orientation="horizontal" position="top-110" className="left-[32.75%] w-[603.25px]"/>
      <TitleText className="top-[446px] left-[34%]" />

      {/* banner space*/}
      <GridLine orientation="horizontal" position="top-120" />
      <div 
        className={`
          absolute top-120 left-0 right-0 h-7.5 opacity-50
          bg-[repeating-linear-gradient(35deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_8px)] 
          pointer-events-none z-[100]
        `}
      />
      <GridLine orientation="horizontal" position="top-127.5" />


      {/* scrollable lines - absolute positioning with viewport units */}
      <GridLine orientation="horizontal" position="top-[100vh]" />
      <GridLine orientation="horizontal" position="top-[150vh]" />
      <GridLine orientation="horizontal" position="top-[200vh]" />
      <GridLine orientation="horizontal" position="top-[250vh]" />
      <GridLine orientation="horizontal" position="top-[300vh]" />

      {/* Additional horizontal lines */}
      <GridLine orientation="horizontal" position="top-[110vh]" />
      <GridLine orientation="horizontal" position="top-[170vh]" />
      <GridLine orientation="horizontal" position="top-[220vh]" />
      <GridLine orientation="horizontal" position="top-[270vh]" />
      <GridLine orientation="horizontal" position="top-[330vh]" />

      {/* vertical lines - span full scrollable height */}
      <GridLine orientation='vertical' position='left-65' isFixed={true} />     
      <GridLine orientation='vertical' position='right-65' isFixed={true} />     

      {/* footbar - scrollable */}
      <GridLine orientation="horizontal" position="top-[483vh]" />
      <GridLine orientation="horizontal" position="top-[495vh]" />

      {/* cards */}
      <Card1 className="absolute top-[43.35%] left-[20.3%]" />
      <GridLine orientation='vertical' position='left-105' className="top-[43.35%] h-[160px]" /> 
      <Card1 className="absolute top-[120%] right-[25%]" />
      <GithubGraph />
    </>
  )
}