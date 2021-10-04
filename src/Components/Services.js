import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Accordion, Card} from 'react-bootstrap';


const Services = () =>{
    return(
        <>
        <div className="menu">
            <h3>Services & Packages</h3>
        <Accordion className="service_menu w-75 mx-auto">
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle className="accordion_title" as={Button} variant="link" eventKey="0">
                    Facials
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Accordion className="single_service">
                        <Accordion.Toggle as={Button} variant="link" eventKey="01">
                            <h4>Custom Facial</h4>
                        </Accordion.Toggle>
                            <h5>$99-$115</h5>
                        <Accordion.Collapse eventKey="01">
                            <h5>Not sure what your skin needs? Let your aesthetician choose after thoroughly evaluating your skin. </h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="02">
                            <h4>Fire and Ice Facial</h4>
                        </Accordion.Toggle>
                            <h5>$115</h5>
                        <Accordion.Collapse eventKey="02">
                            <h5>This IS Clinical facial is designed to safely resurface and rapidly rejuvenate the skin by using a retinol niacinamide mask followed by a hydrating hyaluronic acid mask. Great for anyone looking to reduce the appearance of fine lines and wrinkles while improving the appearance of uneven skin tone. * Little to no down time</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="03">
                            <h4>HydraFacial</h4>
                        </Accordion.Toggle>
                            <h5>$170</h5>
                        <Accordion.Collapse eventKey="03">
                            <h5>The sought-after HydraFacial uses patented technology to cleanse, extract, and hydrate. First, uncover a new layer of skin with gentle exfoliation and relaxing resurfacing. Then Dead skin and oil is painlessly extracted using the HydraFacial vortex-fusion technology. After your skin is exfoliated and clean, the skin is saturated in HydraFacial super serums filled with antioxidants peptides. * Little to no downtime</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="04">
                            <h4>Microneedling</h4>
                        </Accordion.Toggle>
                            <h5>$299</h5>
                        <Accordion.Collapse eventKey="04">
                            <h5>Microneedling produces results through the stimulation of growth factors and collagen, thereby promoting new skin cells to surface. This treatment is great for softening fine lines and wrinkles, large pores, and acne scars. Best results are seen after a series of 3 or 6, each treatment spaced 4 weeks apart (discuss with your aestehtican what is best for you). Results are seen as soon at 2 weeks after your first treatment however new collagen and elastin formation in the skin are documented visibly and measurably as much as one year after just one treatment! * 5-7 days downtime</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="05">
                            <h4>Dermaplane</h4>  
                        </Accordion.Toggle>
                            <h5>$60</h5>
                            <h5>Add-on: $40</h5>
                        <Accordion.Collapse eventKey="05">
                            <h5>A sterile surgical blade is used to removes the top layer of dead skin and vellus hair (peach fuzz). Wonderful exfoliating treatment alone but is an excellent add on service to any facial because it enhances the penetration of any products applied after. * No down time</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="07">
                            <h4>Extractions</h4>
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="07">
                            <h5>Extractions are Included in every facial but if you only have concerns about specific blackheads, white heads or stubborn milia this is a great option for them to skillfully be extracted.</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="08">
                            <h4>Chemical peel</h4>
                        </Accordion.Toggle>
                            <h5>$99</h5>
                        <Accordion.Collapse eventKey="08">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="09">
                            <h4>Advanced Chemical Peel</h4>
                        </Accordion.Toggle>
                            <h5>$150</h5>
                        <Accordion.Collapse eventKey="09">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="010">
                            <h4>Teen Facial</h4>
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="010">
                            <h5>This facial is great for anyone ages 10 to 17. A custom facial is discussed and performed, this facial is very focused on educating teens about their skin and skin care. If there is significant acne, a full acne facial may be necessary. * No downtime</h5>
                        </Accordion.Collapse>
                    </Accordion>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle className="accordion_title" as={Button} variant="link" eventKey="1">
                    Brow and Lashes
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Accordion className="single_service">
                        <Accordion.Toggle as={Button} variant="link" eventKey="11">
                            <h4>Lash Tint</h4>
                        </Accordion.Toggle>
                            <h5>$25</h5>
                        <Accordion.Collapse eventKey="11">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="12">
                            <h4>Brow Tint</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                        <Accordion.Collapse eventKey="12">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="13">
                            <h4>Brow and Lash</h4>
                        </Accordion.Toggle>
                            <h5>$30</h5>
                        <Accordion.Collapse eventKey="13">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="14">
                            <h4>Add-On Lash Tint</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                        <Accordion.Collapse eventKey="14">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="15">
                            <h4>Add-On Brow Tint</h4>
                        </Accordion.Toggle>
                            <h5>$10</h5>
                        <Accordion.Collapse eventKey="15">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="16">
                            <h4>Brow Wax</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                        <Accordion.Collapse eventKey="16">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="17">
                            <h4>Add-On Brow Wax</h4>
                        </Accordion.Toggle>
                            <h5>$5</h5>
                        <Accordion.Collapse eventKey="17">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                    </Accordion>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle className="accordion_title" as={Button} variant="link" eventKey="2">
                    Packages
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <h4>4 HydraFacials for $500 ($125 each)</h4>

                    <h4>3 Microneedles for $750 ($250 each)</h4>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <Button className="button" href="https://www.myaestheticspro.com/booknow/index.cfm?6C7A1A2C8B9ED7DBDF0D8A88769FF081">Book Now</Button>
        </div>
        
        </>
    )
}

export default Services;