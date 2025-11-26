import Card1 from '../components/card-1'
import GridLine from '../components/GridLine'

export default function MainGrid() {
  return (
    <>
      {/* navbar - fixed */}
      <GridLine orientation="horizontal" position="top-5" isFixed={true} />
      <GridLine orientation="horizontal" position="top-17" isFixed={true} />

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
      <Card1 className="absolute top-[20%] left-[25%]" />
      <Card1 className="absolute top-[120%] right-[25%]" />
    </>
  )
}