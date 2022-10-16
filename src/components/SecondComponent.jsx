import React from 'react';
import Boilerplate from './Boilerplate';
const SecondComponent = () => {
    let text1 = 'Bengal presidency war divided into two parts. The nationalists saw the partition as a challenge to Indian nationalism and that it was deliberate attempt to divide Bengal on religious grounds, with Eastern part Muslims majority and western part for Hindu majority. \n This led to a massive upsurge among the people, and a call for swadeshi goods, leading to a boycott of British manufactured goods.'
    let text2 = 'In Calcutta session of 1906, under the leadership of Dadabhai Naoroji, Congress adopted Swaraj as the Goal of Indian people. The extremist leaders of Congress wanted to extend the boycott to all over India and refuse cooperation so that task of administration becomes impossible. The main extremist leaders were Lala Lajpat Ray, Bal Gangadhar Tilak, Bipin Chandra Pal. They were called Lal Bal Pal. They had become so popular that British got alarmed. The slogan was “Swaraj is my Birthright”. They wanted to disobey the unjust laws; they wanted to kick the loyalists out of the society. \n They moderate faction of Congress did not like these new techniques of struggle. They even thought of using the Boycott in only special circumstances.'
    let text3 = 'The 1907 session was to be held at Nagpur. But Nagpur was the stronghold of Bal Gangadhar Tilak. The moderates were aware that the local delegates would raise the issues in favor of the extremists. So, Gopal Krishna Gokhle got the venue changed and the new venue was Surat which was a stronghold of the Congress. The Surat session was presided by Dr. Rash Behari Ghosh. \n The two main objectives placed by the extremists were that: 1) Demand for the resolution of Swaraj 2) Lala Lajpat Rai to be made the President of the INC \n The Indian National Congress was also split into two different groups called Moderates and Radicals because Moderates wanted to go against the British peacefully but Radicals wanted to go against the British violently, but the aim of both was to expel or suppress the British Empire from India.'
    let text4 = 'Khudiram, along with Prafulla Chaki, attempted to assassinate a British judge, Magistrate Douglas Kingsford, by throwing bombs on the carriage they suspected the man was in. Magistrate Kingsford, however, was seated in a different carriage, and the throwing of bombs resulted in the deaths of two British women. Prafulla fatally shot himself before the arrest. Khudiram was arrested and trialed for the murder of the two women, ultimately being sentenced to death. He was one of the first Indian revolutionaries in Bengal to be executed by the British. At the time of his hanging, Khudiram was 18 years, 8 months, and 11 days, 10 hours old making him the second youngest revolutionary in India.'
    let text5 = 'These reforms brought a limited increase in the involvement of Indians in the governance of British India. The act introduced elections to legislative councils and admitted Indians to councils of the Secretary of State for India, the viceroy, and to the executive councils of Bombay and Madras states. Muslims were granted separate electorates. Indian nationalists considered the reforms too cautious and Hindus resented the introduction of separate Muslim electorates.'
    let text6 = 'On 23 December 1912, a Bomb was thrown at the Viceroy Lord Hardinge when his procession was moving from Chandni Chowk. The Viceroy wounded in the attempt, but his Mahavat (driver and keeper of an elephant) was killed. The government strengthens its efforts to destroy the underground activities. Ras Bihari Bose went underground and successfully fled to Japan, where he lived till he died a few years before the conclusion of the Second World War. Before fleeing to Japan, he involved in the Ghadar Conspiracy. \n In the trial of this Delhi Conspiracy Case, Basant Kumar Biswas Amir Chand and Avadh Behari were convicted and executed.'
    return(
        <div>
            <Boilerplate
                title="Partition of Bengal"
                year="1905"
                date="19th July"
                text={text1}
                img1="images/1905/map.jpg"
                img2="images/1905/bengal2.jpg"
                img3="images/1905/bengal4.jpg"
                img4="images/1905/bengal3.jpg"
            />

            <Boilerplate
                title="Calcutta session 1906 and Resolution of Swaraj"
                year="1906"
                date="26th December"
                text={text2}
                img1="images/1906/lala.jpg"
                img2="images/1906/pal.jpg"
                img3="images/1906/tilak.jpg"
                img4="images/1885/naroji.jpg"
            />
            <Boilerplate
                title="Surat Split"
                year="1907"
                date="26th July"
                text={text3}
                img1="images/1907/1907.jpg"
                img2="images/1907/gopal.jpg"
                img3="images/1907/bose.jpg"
                img4="images/1907/19072.jpg"
            />
            <Boilerplate
                title="Khudiram Bose executed"
                year="1908"
                date="11th August"
                text={text4}
                img1="images/1907/khudiram.jpg"
                img2="images/1907/khudiram2.jpg"
                img3="images/1907/khudiram3.jpg"
                img4="images/1907/prafulla.jpg"
            />
            <Boilerplate
                title="Indian Councils Act 1909"
                year="1909"
                date="12th March"
                text={text5}
                img1="images/1909/minto.jpg"
                img2="images/1909/morley.jpg"
            />
            <Boilerplate
                title="Delhi Conspiracy Case"
                year="1912"
                date="12th March"
                text={text6}
                img1="images/1912/avadh.jpg"
                img2="images/1912/basanta.jpg"
                img3="images/1912/amir.jpg"
                img4="images/1907/bose.jpg"
            />
        </div>
    )
}
export default SecondComponent;

