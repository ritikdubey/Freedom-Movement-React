import React from 'react';
import Boilerplate from './Boilerplate';
const FirstWarOfIndependence = () => {
    let text1 = 'The rebellion began as a mutiny of sepoys in Meerut, which was a garrison town of East India Company. \n It lead to several other mutinies and civillian rebellions, mostly in northern and central India. '
    let text2 = 'At grand darbar held at Allahabad, Lord Canning announced the royal proclamation known as Magnacarta of the People of India sent by Queen Victoria, which mentioned that Queen has assumed ever the Government of India. Charles Canning was appointed as governer general of India by Queen Victoria. \n The armies of the East India Company ceased to exist and the forces in India were incorporated as a part of the British army. The most important result was the now onwards the Indian Sepoys were enlisted in the regular service in the British Army and participated in the world wars in the next century.'
    let text3 = 'Indian National Congress was founded at Gokuldas Tejpal Sanskrit College in Bombay, with 72 delegates in attendance.It was started by a retired British civil servant Allan Octavian Hume along with Dadabhai Naoroji and Dinshaw Wacha. The president of the first session was Womesh Chandra Bonnerjee. \n Prominent attendees of the maiden session were Dadabhai Naoroji, Dinshaw Wacha, William Wedderburn, Pherozeshah Mehta, etc. In its early years, the INC was a moderate organisation and limited its means to constitutional methods and dialogue. Its demands were limited to including more Indians in the civil service and the armed forces. '
    

    return(

        <div>
            <Boilerplate
                title="First War of Independence"
                year="1857"
                date="10th May 1857 to 1st November 1858"
                text={text1}
                img1="images/mangal.jpeg"
                img2="images/rani2.jpg"
                img3="images/tatya2.jpg"
                img4="images/1857.jpeg"
            />

            <Boilerplate
                title=""
                year="1858"
                date="1st November 1858"
                text={text2}
                img1="images/18582.jpg"
                img2="images/18583.jpg"
                img3="images/1858.jpg"
            />

            <Boilerplate
                title="Formation of Indian National Congress"
                year="1885"
                date="28th December 1885"
                text={text3}
                img1="images/1885/hume.jpg"
                img2="images/1885/naroji.jpg"
                img3="images/1885/womesh.jpg"
                img4="images/1885/wacha.jpg"
            />

        </div>
    )
}

export default FirstWarOfIndependence;