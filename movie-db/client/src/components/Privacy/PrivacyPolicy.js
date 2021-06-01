import React, {Component} from 'react';
import { Container, Typography, Table, TableRow, TableBody, TableHead, TableCell } from "@material-ui/core";

import useStyles from './styles';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  const classes = useStyles(); 

  return (
    <div className="root">
        <Container maxwidth="sm">
            <div>
                <Typography variant="h4" align="center" gutterBottom className={classes.header}>
                    Privacy Policy
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    This Privacy Policy dictates how Movie Stack collects, uses, maintains, and discloses information collected from our users.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Copyright Infringement Statement
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    Movie Stack is not designed for transferring copyrighted material between users, nor does it allow or have the mechanism for that purpose. Its core purpose is as an index of personal movies and television series, with the secondary purpose as a source of information about the subject matter.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Content Rights
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    Movie Stack does not own or imply ownership of any of the images and videos used on the site. Images belong to their respective copyright owners. Movie Stack members and its host are not liable for any of the content displayed on this site. By submitting information to our site, you agree to allow Movie Stack to display it unconditionally. The content remains yours, but you allow us to display it for any undisclosed time as we see fit.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Personal Identification Information
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    We may collect personal identification information from users in a variety of ways, including, but not limited to, when users visit our site, register on the site, fill out a form, and in connection with other activities, services, features, or resources we make available on our site. Users may be asked for their names and email address. We will collect personal identification information from users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information with no consequences.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Non-personal Identification Information
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    We may collect non-personal identification information about users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about users' means of connection to our site, such as the operating system and the Internet service providers utilized and other similar information.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    What Information Do We Collect
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>Item</TableCell>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>Types of Data</TableCell>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>Purpose</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className="tableBody">
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>Basic</TableCell>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>
                                 <ul>
                                    <li>First and Last Name</li>
                                    <li>Email</li>
                                </ul>
                            </TableCell>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>
                                To help us develop, deliver, and improve our services. As well as deliver important notices.
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>Data related to your account and use of service</TableCell>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>
                                <ul>
                                    <li>Registered email address</li>
                                    <li>Password</li>
                                </ul>
                            </TableCell>
                            <TableCell style={{fontSize:'15pt', color:'darkgrey', fontWeight:'bold'}}>
                                To audit and analyze data for technical administration, improving our services, and for end-user communications.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    How We Use Collected Information
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    Movie Stack does not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with trusted affiliates. The purpose of our data gathering is to run and operate our site. The secondary reason is to improve our site and customer services.
                    We only share and disclose your information in the following situations:
                    <ul>
                        <li>
                            + Compliance with Laws. We may disclose your information when we are legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal processes, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                        </li>
                        <li>
                            + Vital Interests and Legal Rights. We may disclose your information when we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                        </li>
                        <li>
                            + Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include data analysis, email delivery, hosting services, customer service, and marketing efforts. We may allow selected third parties to use tracking technology on our site, which will enable them to collect data about how you interact with the site over time. This information may be used to, among other things, analyze and track data, and better understand online activity. Unless described in this Policy, we do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.
                        </li>
                        <li>
                            + With your Consent. We may disclose your personal information for any other purpose with your consent.
                        </li>
                        <li>
                            + Other Users. When you share your personal information (for example, by posting comments, contributions, or other content to the site) or otherwise interact with public areas of the site, such personal information may be viewed by all users and may be publicly distributed outside the site in perpetuity. [If you interact with other users of our site and register through a social network (such as Google), your contacts on the social network will see your name, profile photo, and descriptions of your activity.] Similarly, other users will be able to view descriptions of your activity, communicate with you within our site, and view your profile.
                        </li>
                    </ul>
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Keep Your Information Safe
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    We adopt appropriate data collection, storage, and processing practices with sufficient security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, the transmission of personal information to and from our site is at your own risk. You should only access the services within a secure environment, be protective of your data.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Changes To This Privacy Policy
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    Movie Stack has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our site. We encourage our users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Your Acceptance Of These Terms
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    By using our site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our services. Your use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at sirijirakars@spu.edu <a href="mailto:sirijirakars@spu.edu" style={{color:'blue'}}> here</a>.
                </Typography>
                <br/>
            </div>
            
        </Container>
    </div>
    
  );
};

export default PrivacyPolicy;