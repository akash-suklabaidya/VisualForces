import React from 'react'
import NumberOfContestParticipated from './Content/Context Participation Stats/NumberOfContestParticipated';
import MaxRatingIncrAndDec from './Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import PosAndNegRatPerCon from './Content/Rating Distribution Stats/PosAndNegRatPerCon';
// import SubmissionPerDay from './Content/SubmissionRate/SubmissionPerDay';
import NoOfQuestions from './Content/Questions Solved/NoOfQuestions';
import TypeOfProblemsSolved from './Content/Questions Solved/TypeOfProblemsSolved';
import UserInfo from './Content/User Info/UserInfo';
import Search from './Search/Search';
import SearchContext from './Context/SearchContext';

function App() {
  // const fromDate = Math.floor(Date.UTC(2023, 4, 19, 0, 0, 0) / 1000);
  // const toDate = Math.floor(Date.UTC(2023, 4, 19, 23, 59, 59) / 1000);
  return (
    <div>
      <SearchContext.Provider >
        <Search />
        <NumberOfContestParticipated />
        {/* <MaxRatingIncrAndDec handle={"stand_alone_akash"} /> */}
        {/* <PosAndNegRatPerCon handle={"akashsb"} /> */}
        {/* <SubmissionPerDay handle={"stand_alone_Akash"} fromDate={fromDate} toDate={toDate} /> */}
        {/* <NoOfQuestions userHandle={"akashsb"} /> */}
        {/* <TypeOfProblemsSolved userHandle={"bj_jiwrajka"} /> */}
        {/* <UserInfo handle={"tourist"} /> */}
      </SearchContext.Provider>


    </div >
  )
}

export default App