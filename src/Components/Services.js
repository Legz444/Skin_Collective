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
                            <h4>Express HydraFacial</h4>
                        </Accordion.Toggle>
                            <h5>$170</h5>
                        <Accordion.Collapse eventKey="03">
                            <h5>Deeply cleanses, exfoliates, and hydrates with Hydrafacials patented resurfacing serums and vortrex technology delivery system. </h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="04">
                            <h4>Deluxe HydraFacial</h4>
                        </Accordion.Toggle>
                            <h5>$220</h5>
                        <Accordion.Collapse eventKey="04">
                            <h5>Deeply cleanses, exfoliates, and hydrates, while addressing specific skin concerns with the personalized booster of your choice (brightening Complex or Dermabuilder), Red light is used to penetrate the serums and booster deeper into the skin. One Hydrafacial treatment with a booster is the equivalent to using a special treatment serum for 3 weeks!</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="05">
                            <h4>Platinum HydraFacial</h4>
                        </Accordion.Toggle>
                            <h5>$280</h5>
                        <Accordion.Collapse eventKey="05">
                            <h5>Before diving into the Hydrafacial cleansing, exfoliating, and hydrating serums, facial lymphatic drainage is performed. The Hydrafacial ReGen Growth Factor is applied , diminishing fines lines and enhancing the appearance of firmness. </h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="06">
                            <h4>Microneedling</h4>
                        </Accordion.Toggle>
                            <h5>$299</h5>
                        <Accordion.Collapse eventKey="06">
                            <h5>Microneedling produces results through the stimulation of growth factors and collagen, thereby promoting new skin cells to surface. This treatment is great for softening fine lines and wrinkles, large pores, and acne scars. Best results are seen after a series of 3 or 6, each treatment spaced 4 weeks apart (discuss with your aestehtican what is best for you). Results are seen as soon at 2 weeks after your first treatment however new collagen and elastin formation in the skin are documented visibly and measurably as much as one year after just one treatment! * 5-7 days downtime</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="07">
                            <h4>Dermaplane</h4>  
                        </Accordion.Toggle>
                            <h5>$60</h5>
                            <h5>Add-on: $40</h5>
                        <Accordion.Collapse eventKey="07">
                            <h5>A sterile surgical blade is used to removes the top layer of dead skin and vellus hair (peach fuzz). Wonderful exfoliating treatment alone but is an excellent add on service to any facial because it enhances the penetration of any products applied after. * No down time</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="08">
                            <h4>Extractions</h4>
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="08">
                            <h5>Extractions are Included in every facial but if you only have concerns about specific blackheads, white heads or stubborn milia this is a great option for them to skillfully be extracted.</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="09">
                            <h4>Chemical peel</h4>
                        </Accordion.Toggle>
                            <h5>$99</h5>
                        <Accordion.Collapse eventKey="09">
                            <h5>Your aesthetician will choose the correct  superficial peel for you based on your skin and skin care concern. The peel consists  of an Alpha-hydroxy acid or another mild acid and is used to penetrate only the outer layer of skin to gently exfoliate it. The treatment is used to improve the appearance of mild skin discoloration and rough skin as well. * Little  to no downtime</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="010">
                            <h4>Advanced Chemical Peel</h4>
                        </Accordion.Toggle>
                            <h5>$150</h5>
                        <Accordion.Collapse eventKey="010">
                            <h5>The Perfect Peel is applied to penetrate the outer and middle layers of skin to remove damaged skin cells followed by an All-Trans-Retinol Complex. The treatment is used to improve age spots, fine lines and wrinkles, freckles and moderate skin discoloration. It also can be used to smooth rough skin. * 3-7 days downtime</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="011">
                            <h4>Teen Facial</h4>
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="011">
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
                            <h5>Add-on: $15</h5>
                        <Accordion.Collapse eventKey="11">
                            <h5>Tinting is a safe way to temporarily dye the eyelashes or eyebrows. Results vary and last 3-6 weeks.</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="12">
                            <h4>Brow Tint</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                            <h5>Add-on: $10</h5>
                        <Accordion.Collapse eventKey="12">
                            <h5>Tinting is a safe way to temporarily dye the eyelashes or eyebrows. Results vary and last 3-6 weeks.</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="15">
                            <h4>Brow and Lash</h4>
                        </Accordion.Toggle>
                            <h5>$30</h5>

                        <Accordion.Toggle as={Button} variant="link" eventKey="16">
                            <h4>Brow Wax</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                            <h5>Add-on: $5</h5>
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