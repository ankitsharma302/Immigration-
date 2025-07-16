
import React, { Fragment, useState } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios';
import "./data.css"

function Data() {
    return (
        <>
            <div id="datapage">

                <Menu />
                <br/><br/>
                <h1 className='center'>CANADA SKILLED IMMIGRATION POINTS(CRS SCORE) CALCULATOR</h1>
                <h3 className='center'>Check Eligibility</h3>
                <br/>
                <p><em><strong>CRS Score Calculator</strong> : Canada’s Express Entry system requires 67 points to be scored to be able to create an Express Entry profile with Immigration, Refugees and Citizenship Canada</em> (<em>IRCC</em>).</p>
        <p>Your immigration to Canada as a permanent resident through the Express Entry system will be greatly influenced by your profile. The points required to file for a Canadian permanent residence through Express Entry include the eligibility requirement which is 67 points out of 100. You will need to score at least 67 points under various eligibility criteria to apply for a Canada PR visa through Express Entry. Your application will be assessed on a points-based system depending on the below 6 factors:-</p>
        
        <ul>
          <li>&nbsp;1 :&nbsp;<strong>AGE</strong></li>
          <li>&nbsp;2 :&nbsp;<strong>EDUCATION</strong></li>
          <li>&nbsp;3 :&nbsp;<strong>EXPERIENCE</strong></li>
          <li>&nbsp;4 :&nbsp;<strong>LANGUAGE SKILLS</strong></li>
          <li>&nbsp;5 :&nbsp;<strong>ARRANGED EMPLOYMENT IN CANADA&nbsp;</strong>[LMIA approved ]</li>
          <li>&nbsp;6 :&nbsp;<strong>ADAPTABILITY</strong></li>
        </ul>
        <h5><strong>AGE – MAXIMUM 12 POINTS</strong></h5>
        <p>Points will be awarded to applicants for their age. They can obtain a maximum 12 points. The age&nbsp;<strong>calculation is done from the day your application is received</strong>.</p>
        <h5><strong>EDUCATION – MAXIMUM 25 POINTS</strong></h5>
        <p>You can score a maximum 25 Canada immigration points for your education. If you have an overseas education you must have an ECA report from an authorized agency.&nbsp;<strong>Educational Credential Assessment</strong> report evaluates whether your overseas degrees/diplomas are on par with Canadian education.</p>
        <h5><strong>EXPERIENCE – MAXIMUM 15 POINTS</strong></h5>
        <p>Canada immigration points will also be incurred for your work experience. You can obtain points for the number of years you worked full-time that was&nbsp;<strong>paid and a minimum 30 hours weekly</strong>. An equal amount of part-time work is also eligible. You can obtain a maximum 15 points for this factor, as quoted by Canada</p>
        <h5><strong>LANGUAGE SKILLS – MAXIMUM 28 POINTS</strong></h5>
        <p>Knowledge of&nbsp;<strong>English and or French</strong> will help you in the entry into the Canadian job market. You can obtain a maximum 28 points for your language skills assessed for writing, reading, listening, and speaking.</p>
        <h5><strong>ARRANGED EMPLOYMENT IN CANADA – MAXIMUM 10 POINTS</strong></h5>
        <p>You can also obtain Canada immigration points for a job offer of minimum 1-year form an employer in Canada. You must&nbsp;<strong>get this offer prior to submitting an application</strong> for arriving in Canada as a federal skilled worker.</p>
        <h5><strong>ADAPTABILITY – MAXIMUM 10 POINTS</strong></h5>
        <p>You will be offered points based on your&nbsp;<strong>past study, work, and relatives in Canada. Your Common-Law-Partner or Spouse</strong> if immigrating to Canada with you can also incur additional points under the adaptability factor.</p>
        <p>IRCC conducts draws from the&nbsp;Express Entry pool from time to time. It is the highest-ranked, based on their score on the Comprehensive Ranking System (CRS), that are issued invitations to apply under Express Entry.</p>
        <p>The minimum CRS cutoff varies. Candidate’s factors such as age, work experience, adaptability, etc. determine your CRS score. If your CRS is low then there are several ways how to improve your score.</p>
        <h5><strong>WAYS TO IMPROVE YOUR CRS SCORE</strong></h5>
        <p>The Express Entry draw is conducted at regular intervals, so there is always a chance for you to improve your CRS scores.</p>
        <p>You can always find ways to improve your CRS score so that you get the required points to secure an Invitation to Apply (ITA) for the PR visa in the next Express Entry draw.</p>
        <p>Here are some ways to improve your CRS score</p>
        <ul>
          <li><br />
            <ul>
              <li>
                <h6><strong>BOOST YOUR LANGUAGE SCORE:</strong></h6>
                <p>Score well in language tests such as the IELTS, your CRS score will improve. For example, in the language test, if you score a Canadian Language Benchmark (CLB) of 9, you’ll get up to 136 direct points added to your CRS ranking. Appearing for a language test in French can also add up to 72 points.</p>
              </li>
              <li>
                <h6><strong>PROVINCIAL NOMINEE PROGRAM:</strong></h6>
                <p>if you receive an invitation, you will receive 600 additional points for your Express Entry profile.</p>
              </li>
              <li>
                <h6><strong>GET A WORK OFFER [LMIA Approved]:</strong></h6>
                <p>If you receive a work offer recognized by the Labor Market Impact Assessment (LMIA) from an employer in Canada, you can add up to 200 points to your CRS ranking.</p>
              </li>
              <li>
                <h6><strong>GET EDUCATION IN CANADA:</strong></h6>
                <p>Up to 30 extra points can be received if you complete a recognized degree or diploma in Canada.</p>
              </li>
              <li>
                <h6><strong>DEPENDENT INCLUDED IN THE APPLICATION</strong><strong>[Spouse/Common-Law Partner]</strong></h6>
                <p>:Applying with your spouse for the visa will earn you both additional points. The language proficiency of your spouse would be worth 20 points, while the education level and Canadian work experience can earn you as much as 10 points for each category. So, this will add up to 40 points to your CRS score.</p>
              </li>
              <li>
                <h6><strong>CANADIAN WORK EXPERIENCE:</strong></h6>
                <p>If you have fewer than three years of full-time work experience and if you continue to work you can add maximum 150 points to your CRS score.</p>
              </li>
            </ul>
          </li>
        </ul>
        <br/><br/><br/>
        <h1 className='center'>AUSTRALIA SKILLED IMMIGRATION POINTS CALCULATOR</h1>
        <div>
          <h2 className='center'>CHECK YOUR ELIGIBILITY</h2>
        </div>
        <br/>
        <p>Business people and skilled professionals can&nbsp;migrate to Australia based on their skill sets, educational qualifications and work experience. With the general skilled migration self-assessment test, an individual can evaluate his/her chances for Australian immigration.</p>
        <p>Individuals will score high if they are aged under 50, have English language proficiency, have adequate work experience in their nominated occupation, which must be included in the country’s SOL (Skilled Occupation List).</p>
        <p><em>For more details on highest paid professionals in Australia, read more on…</em></p>
        <p>Highest paid professions in Australia under SOL- 2022</p>
        <p><strong>Australia skilled migration points</strong></p>
        <p>Under the<strong>&nbsp;Australia immigration point system,</strong> immigration candidates can acquire the required&nbsp;<strong>Australia migration points&nbsp;</strong>which are awarded to a candidate provided he meets the requirements under the following criteria.</p>
        <ul>
          <li><strong>Age:</strong> Applicants between the age of 18 and 44 can score points under the age</li>
          <li><strong>English language:</strong> The applicant should prove that he has the required competency in the language by submitting the test results of any recognized English language proficiency test.</li>
          <li><strong>Overseas Experience points (Experience outside Australia):</strong> The applicant can claim points for having three/five/eight years of overseas experience in the nominated occupation in the last 10 years.</li>
          <li><strong>Australian Experience:</strong></li>
        </ul>
        <ol>
          <li>The applicant can claim points for having worked in Australia in one of the occupations listed on the SOL on a full-time basis.</li>
          <li>The applicant can claim points for having one/three/five/eight years of Australian experience in the nominated occupation in the last 10 years.</li>
        </ol>
        <ul>
          <li><strong>Overseas Qualification points (Qualifications gained outside Australia):</strong> The applicant can claim points for recognized qualifications which is at a level of bachelor’s or higher or Ph.D.</li>
          <li><strong>Australian Study:&nbsp;</strong>The applicant can claim additional points for doing a course in Australia of at least two academic years or more.</li>
          <li><strong>Live and Study in Regional Area:&nbsp;</strong>The applicant can claim additional points if he has met the Australian study requirement of living and studying in a ‘regional low population growth metropolitan area’ for at least 2 years.</li>
          <li><strong>Partner Skills:&nbsp;</strong>The applicant can claim points under partner skills if the partner satisfies the basic requirements of age, English language ability, qualifications and skills assessment result.</li>
        </ul>
        <p>Candidates scoring a minimum of 65 points would be considered eligible by&nbsp;<strong>DHA (Department of Home Affairs)</strong>, an organization responsible for immigration.</p>
        <p>Points determine your eligibility for an&nbsp;Australia PR visa. As already mentioned, you must score at least 65 points under the Points Grid. The below table describes the different criteria for scoring points:</p>
        <table width={780}>
          <tbody>
            <tr>
              <td width={577}><strong>Category</strong></td>
              <td width={203}><strong>&nbsp;Maximum Points</strong></td>
            </tr>
            <tr>
              <td width={577}>Age (25-32 years)</td>
              <td width={203}>30 points</td>
            </tr>
            <tr>
              <td width={577}>English proficiency (8 bands)</td>
              <td width={203}>20 points</td>
            </tr>
            <tr>
              <td width={577}>
                <p>Work Experience outside Australia (8-10 years)</p>
                <p>Work Experience in Australia (8-10 years)</p>
              </td>
              <td width={203}>
                <p>15 points</p>
                <p>20 points</p>
              </td>
            </tr>
            <tr>
              <td width={577}>
                <p>Education (outside Australia)</p>
                <p>Doctorate degree</p>
              </td>
              <td width={203}>20 points</td>
            </tr>
            <tr>
              <td width={577}>Niche skills such as Doctorate or master’s degree in Australia</td>
              <td width={203}>5 points</td>
            </tr>
            <tr>
              <td width={577}>
                <p>Study in a regional Australia</p>
                <p>Accredited in community language</p>
                <p>Professional year in a skilled program in Australia</p>
                <p>State sponsorship (190 visa)</p>
              </td>
              <td width={203}>
                <p>5 points</p>
                <p>5 points</p>
                <p>5 points</p>
                <p>5 points</p>
              </td>
            </tr>
          </tbody>
        </table>
                <Footer />
            </div>
        </>

    )
}
export default Data;

