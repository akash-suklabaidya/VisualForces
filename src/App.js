import React from 'react'
import Data from './API/Data';
import NumberOfContestParticipated from './Content/Context Participation Stats/NumberOfContestParticipated';
import MaxRatingIncrAndDec from './Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import PosAndNegRatPerCon from './Content/Rating Distribution Stats/PosAndNegRatPerCon';
// import SubmissionPerDay from './Content/SubmissionRate/SubmissionPerDay';

function App() {
  // const fromDate = Math.floor(Date.UTC(2023, 4, 19, 0, 0, 0) / 1000);
  // const toDate = Math.floor(Date.UTC(2023, 4, 19, 23, 59, 59) / 1000);
  return (

    <div>
      {/* <Data /> */}
      {/* <NumberOfContestParticipated handle={"stand_alone_akash"} /> */}
      {/* <MaxRatingIncrAndDec handle={"stand_alone_akash"} /> */}
      {/* <PosAndNegRatPerCon handle={"akashsb"} /> */}
      {/* <SubmissionPerDay handle={"stand_alone_Akash"} fromDate={fromDate} toDate={toDate} /> */}
    </div>
  )
}

export default App