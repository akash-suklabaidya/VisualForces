import React from 'react'
import NumberOfContestParticipated from './Content/Context Participation Stats/NumberOfContestParticipated';
import MaxRatingIncrAndDec from './Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import PosAndNegRatPerCon from './Content/Rating Distribution Stats/PosAndNegRatPerCon';
import SubmissionPerDay from './Content/SubmissionRate/SubmissionPerDay';
import NoOfQuestions from './Content/Questions Solved/NoOfQuestions';
import TypeOfProblemsSolved from './Content/Questions Solved/TypeOfProblemsSolved';
import UserInfo from './Content/User Info/UserInfo';
import Search from './Component/Search';
import UserProfile from './Content/UserProfile/UserProfile';
import ExportAll from './Charts/ExportAll';
import ContentContext from './Context/ContentContext';
import ContentProvider from './Context/ContentContext';
// import QuestionPerContest from './Content/Context Participation Stats/QuestionPerContest';
import RatingChangesPerCon from './Content/Context Participation Stats/RatingChangesPerCon';
import Stats from './Content/Stats Page/Stats';
import QuestionsSolvedPerContest from './Content/Context Participation Stats/QuestionsSolvedPerContest';
import SplitScreen from './Content/UserProfile/Split';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import FutureScope from './Component/FutureScope';




function App() {
  // const fromDate = Math.floor(Date.UTC(2023, 4, 19, 0, 0, 0) / 1000);
  // const toDate = Math.floor(Date.UTC(2023, 4, 19, 23, 59, 59) / 1000);
  return (
    <div>
      <Navbar />
      <Search />
      <FutureScope />

      {/* <QuestionPerContest /> */}
      {/* <PosAndNegRatPerCon /> */}
      {/* <ContentContext /> */}
      {/* <UserProfile /> */}
      {/* <Stats /> */}
      {/* <QuestionsSolvedPerContest /> */}
      {/* <UserInfo /> */}
      {/* <RatingChangesPerCon /> */}
      {/* <NumberOfContestParticipated />
      <MaxRatingIncrAndDec />
      <PosAndNegRatPerCon />
      <SubmissionPerDay />
      <NoOfQuestions />
      <TypeOfProblemsSolved />
      <UserInfo /> */}
      {/* <TypeChart /> */}
      {/* <SplitScreen />

      <ExportAll />

      <Footer /> */}
      {/* <Contact /> */}
      {/* <Route path='/contact' element={<Contact />} /> */}



    </div >
  )
}

export default App