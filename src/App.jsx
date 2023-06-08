import React from 'react'
import NumberOfContestParticipated from './Content/Context Participation Stats/NumberOfContestParticipated';
import MaxRatingIncrAndDec from './Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import PosAndNegRatPerCon from './Content/Rating Distribution Stats/PosAndNegRatPerCon';
import SubmissionPerDay from './Content/SubmissionRate/SubmissionPerDay';
import NoOfQuestions from './Content/Questions Solved/NoOfQuestions';
import TypeOfProblemsSolved from './Content/Questions Solved/TypeOfProblemsSolved';
import UserInfo from './Content/User Info/UserInfo';
import Search from './Search/Search';
import UserProfile from './Content/UserProfile/UserProfile';
import ExportAll from './Charts/ExportAll';
import ContentContext from './Context/ContentContext';
import ContentProvider from './Context/ContentContext';
// import QuestionPerContest from './Content/Context Participation Stats/QuestionPerContest';
import RatingChangesPerCon from './Content/Context Participation Stats/RatingChangesPerCon';
import Stats from './Content/Stats Page/Stats';


function App() {
  // const fromDate = Math.floor(Date.UTC(2023, 4, 19, 0, 0, 0) / 1000);
  // const toDate = Math.floor(Date.UTC(2023, 4, 19, 23, 59, 59) / 1000);
  return (
    <div>
      <Search />

      {/* <QuestionPerContest /> */}
      {/* <PosAndNegRatPerCon /> */}
      {/* <ContentContext /> */}
      {/* <UserProfile /> */}
      {/* <UserInfo /> */}
      {/* <RatingChangesPerCon /> */}
      {/* <NumberOfContestParticipated />
      <MaxRatingIncrAndDec />
      <PosAndNegRatPerCon />
      <SubmissionPerDay />
      <NoOfQuestions />
      <TypeOfProblemsSolved />
      <UserInfo /> */}
      {/* <ExportAll /> */}
      {/* <TypeChart /> */}


      <Stats />



    </div >
  )
}

export default App