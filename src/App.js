import React from 'react'
import Data from './API/Data';
import NumberOfContestParticipated from './Content/Context Participation Stats/NumberOfContestParticipated';
import MaxRatingIncrAndDec from './Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import PosAndNegRatPerCon from './Content/Rating Distribution Stats/PosAndNegRatPerCon';
import SubmissionPerDay from './Content/SubmissionRate/SubmissionPerDay';

function App() {
  return (
    <div>
      {/* <Data /> */}
      {/* <NumberOfContestParticipated handle={"stand_alone_akash"} /> */}
      {/* <MaxRatingIncrAndDec handle={"stand_alone_akash"} /> */}
      {/* <PosAndNegRatPerCon handle={"akashsb"} /> */}
      <SubmissionPerDay handle={"akashsb"} />
    </div>
  )
}

export default App