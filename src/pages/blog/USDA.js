import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Img from 'react-cloudinary-lazy-image';
import Main from '../../posts/main';
import Photo from '../../posts/USDA/photos';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const posts = [];

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={4}>
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="USDA Internship" posts={posts} />
                        <div style={{ width: '90%', marginLeft: '6%', fontSize: '1rem' }}>
                            <b>Intro:</b>

                            <p>In the summer of 2020, I had the opportunity to work at the USDA’s (United States Department of Agriculture) ALARC facility, in Maricopa Arizona. I was under the supervision of an agriculture engineer who was working on High Throughput Phenotyping research. </p>

                            <b>Hamby:</b>
                            <p>During my time there I had been assigned a few projects. One of which was integrating various sensors for a seed counting machine. The second project was, testing and operating a tractor that was equipped with one camera and two sensors on the sides of a gantry.</p>
                            <p> The primary camera on the tractor was a two channel NIR (Near Infrared) and CCD RGB camera. I learned that this specific choice of instrumentation was because given optimal conditions, we can sense how healthy a crop is based on how green the plant canopy was. This particular problem is a little more nuanced than I am initially leading on because phenotyping is simply just characterizing the physical traits of a plant. Genotyping is ultimately the science that the USDA was focused on, which is analyzing what traits an individual plant inherited from its parents. These various disciplines work beside each other giving various insights on an individual plant and its genetics.  </p>

                            <p>The tractor platform that I worked on was dubbed “Hamby”. Hamby was based on a tractor from ALARC’s pest control unit. It was originally utilized to spray crops with pesticide but was being phased out for a different tool. With this platform on loan, the plant genetics unit (the unit I was working for) designed a system that would fit over the existing hardware. The result was a tool that could drive over a group of four rows of crops and take pictures and collect data passively. These pictures were then fed into a processing pipeline that would stitch these images together, and apply a series of different tools to analyze the green index of a plants canopy.  </p>
                            <p>The main crops I helped image were a group of Guayule and Soybean plants. These crops were further divided into sections which averaged about 100 plus sections with varying genetic traits. Camera technology is fairly inexpensive nowadays and can play a crucial role in HTP (High Throughput Phenotyping) systems. HTP research is ultimately concerned about maximizing crop yields per so many acres of land. With the world population increasing at the rate that it is, it has become far more important to make sure we have enough resources to feed this ever-growing population of people.  </p>
                            <p>
                                <p>Sadly, due to COVID-19, I was only able to go down to the facility once a week for two months straight. During this time, I was working remotely unless I needed to go into the office. On a day I needed to go in, I would drive an hour from where I lived to Maricopa and setup the sensor equipment on Hamby. Drive Hamby an additional 30 minutes out of the garage at ALARC to the agriculture fields (because the tractor could only travel about 5mph). At the start I was mapping one or two fields just to test the phenotyping system, but after a while I was able to map the two soybean and 4 additional guayule fields. Bellow I will post a map of the rough outline of the route I would take during this process.  </p>
                                <center>
                                    <img style={{ borderRadius: '25px' }} src={Photo.FirstPhoto} width="250rem" height="300rem"></img>
                                </center>
                                <br></br>
                                <b>Seed Counting:</b>

                                <p>Before I was employed there was some work done on a seed counting system using Machine Learning, and a optical processing approach. I am not too aware of the specifics of this portion of the project, because my job was to integrate the hardware that was going to be used. The Hardware that was given to me to integrate was
                                </p>
                                <p>• Cannon T7I Camera</p>

                                <p>• Barcode reader</p>

                                <p>• Kitchen Scale</p>
                            </p>
                            <p>Ironically, I don’t have many if any pictures of the barcode reader but I do have the final version of the code I wrote for this system on  GitHub. <a href="https://github.com/finkegabriel/USDA_Internship/blob/main/seed_counter/seed_counter.py">HERE</a>  </p>
                            <p></p>
                            <p>Parts used</p>
                            <a target={"_blank"} href={"https://www.amazon.com/gp/product/B00LE5VV1C/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00LE5VV1C&linkCode=as2&tag=gfinke1019-20&linkId=5b9f56e5f85eb4cb26c4a5449f17b1a9"}>WoneNice USB Laser Barcode Scanner Wired Handheld Bar Code Scanner Reader Black</a>
                            <img src={"//ir-na.amazon-adsystem.com/e/ir?t=gfinke1019-20&l=am2&o=1&a=B00LE5VV1C"} width={"1"} height={"1"} border={"0"} alt={""}></img>
                            <p></p>

                        </div>
                        {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}