import React from 'react'
import Data from './API/Data';
import NumberOfContestParticipated from './Content/Context Participation Stats/NumberOfContestParticipated';
import MaxRatingIncrAndDec from './Content/Rating Distribution Stats/MaxRatingIncrAndDec';


function App() {
  return (
    <div>
      {/* <Data /> */}
      {/* <NumberOfContestParticipated handle={"stand_alone_akash"} /> */}
      <MaxRatingIncrAndDec handle={"stand_alone_akash"} />
    </div>
  )
}

export default App