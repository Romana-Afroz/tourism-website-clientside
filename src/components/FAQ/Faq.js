import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className="m-5 p-5">
            <h1>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey="0" flush className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Any Entry Requirements During the COVID-19 Pandemic?</Accordion.Header>
                    <Accordion.Body>
                        All international tourists are permitted to enter any country by air, land and sea.

                        Tourists must meet the visa requirements, when applicable, as well as the requirements established in the framework of the pandemic.

                        The Government of  any country does not require tourists entering by air, land or sea to present a negative COVID-19 test, nor quarantine upon arrival.

                        Tourists visiting any country are requested to abide by the sanitary protocols in place when participating in tourist activities throughout the country!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I wash my clothes during the tour?</Accordion.Header>
                    <Accordion.Body>
                        Most hotels offer laundry service and in some cases you may get a piece or two per day as a benefit of the room type you booked, your elite status or the resort fee. But hotels usually charge per piece, which can make it expensive to wash more than a couple items.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Will I have access to the internet during travelling?</Accordion.Header>
                    <Accordion.Body>
                        We’ve all heard horror stories from people who’ve gone away on a trip and then returned home to a huge bill thanks to their mobile phone roaming on data networks when they’re away.

                        The good news is, this doesn’t have to be you. There are lots of options for getting internet access when you travel, ranging from entirely free through to more premium options.

                        In today’s post I want to help guide you through the options available to you when you travel for getting online.

                        This will include options for getting online on your mobile phone, as well as on any other devices you might have with you, including tablets and laptops.

                        My guide will focus purely on internet access while travelling internationally, rather than texting or calling, although some of the solutions below will also work for texting and calling.

                        These are based on our personal experiences travelling through multiple countries each year, and are listed in order of our personal preference for how we get online when travelling. We’ve also included any discount codes that we’ve been able to find from suppliers for you guys.!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Do I need any vaccinations?</Accordion.Header>
                    <Accordion.Body>
                        The CDC divides travel vaccinations into three categories: routine, recommended, and required. The only vaccine classified as "required" by International Health Regulations is the yellow fever vaccination for travel to certain countries in sub-Saharan Africa and tropical South America.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Are there any age restrictions for this tour?</Accordion.Header>
                    <Accordion.Body>
                        For most tours, there is no minimum age for children as long as a parent or guardian accompanies them. Unaccompanied guests must be older than 18 years of age or if younger, a written consent from their parent or legal guardian must be provided directly to the Shore Tours Manager/Operator once onboard.

                        On both our snorkelling and bike tours a minimum age restriction may apply and may vary by tour. For Introductory Scuba Diving tours, there is a minimum age of 12 years and all guests under 18 years must have written consent and be accompanied by a parent or guardian. Parents of children who wish to participate on biking tours should enquire at the Shore Tours Desk onboard as we will need to verify that an appropriate size bike can be arranged
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Why choose us?</Accordion.Header>
                    <Accordion.Body>
                        <p>1. Experience and Trustworthiness.</p>
                        <p>2.Friendly and Qualified Stuff.</p>
                        <p>3. Best Price, no Hidden Fees.</p>
                        <p>4.The Variety of Tours and Programs.</p>
                        <p>5.The High Level of Service..</p>
                        <p>6.Personal Approach to Each Client.</p>
                        <p>7.Openness and Availability.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;