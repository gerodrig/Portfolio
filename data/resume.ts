import { IResume } from "../interfaces";

export const resumeData: IResume = {
    education: [
        {
            name: 'Seneca College',
            title: 'Computer Programmer Diploma',
            startDate: '2019-12-12',
            endDate: '2021-04-01',
        },
        {
            name: 'Universidad de Guadalajara',
            title: 'Industrial and Systems Engineering',
            startDate: '2003-08-01',
            endDate: '2008-04-01',
        },
    ],
    employment: [
        {
            name: 'Purolator',
            title: 'IT Support Analyst',
            startDate: '2021-05-01',
            endDate: '',
            description:
                'Responsible for IT support, IT Security and EUC service escalations',
            responsibilities: [
                'Provide prompt, effective day-to-day support, accurately identify and resolve issues, perform controlled and timely incident resolution all while making client satisfaction a top priority.',
                'Follow established processes/standards, business technology architecture, risk and production capacity guidelines; plan, monitor and escalate issues as required.',
                'Support and troubleshooting MS Office, MS Teams, Okta (SSO), Salesforce, Cority,  SAP and common SaaS services',
                'Maintain and update IT infrastructure and systems, including network, storage, and server hardware.',
                'Managing of Microsoft InTune MDM and mobile devices',
                'Service Now, Service Desk, and other IT support tools',
            ],
        },
        {
            name: 'The Home Depot',
            title: 'Service Desk Associate',
            startDate: '2020-03-01',
            endDate: '',
            description:
                'Responsible for following through on all Customer Order Management (COM) orders from beginning to end and until the customer is satisfied including but not limited to special order, install and website orders.',
            responsibilities: [
                'Ensure customers receive products and services requested in a timely and accurate manner.',
                'Act as a liaison between customers, Project Support Centre, Kitchen Designers, Home Depot Associates, vendors, installers and third party agents.',
                'Resolve issues, assess customer needs, coordinate all order related activities in partnership with the Project Support Centre, delivery companies, vendors and service providers in a timely and professional manner.',
            ],
        },
        {
            name: 'Kering Technologies',
            title: 'Service Desk / Service Quality Specialist',
            startDate: '2018-09-01',
            endDate: '2020-01-01',
            description:
                'Responsible for providing operational and first-level IT user support services for all Kering business units including Gucci, YSL, Bottega Veneta, and other fashion brands.',
            responsibilities: [
                'Manage IT procurement, installation, and maintenance of computer systems.',
                'Quality assurance of service desk and IT infrastructure.',
                'Communicate results of analysis to internal MIS team to help determine root cause analysis for problem resolution looking beyond the obvious to determine why MIS is not meeting quality standards.',
            ],
        },
        {
            name: 'Ericsson',
            title: 'Incident and Problem Manager',
            startDate: '2015-02-01',
            endDate: '2018-08-01',
            description:
                'Responsible for managing the Incident/Problem Process and Governance model for Ericsson Managed Services.',
            responsibilities: [
                'Emergency S1/S2 incidents recovery leader with a strong focus on service restoration and outage management. Accountable for accurate customer notification updates and call management. Major Incident report responsible deliver after incident resolution.',
                'Root cause process owner of every confirmed outage to have the report on time and with the quality needed to address preventive actions and avoid recurrences by sharing lessons learned, actions to implement for a permanent solution and recommendations.',
                'Proactive problem management driver to reduce monthly incident volume. Strong Emphasis on concentrating efforts to solve cases which are jeopardizing business or customer satisfaction.',
            ],
        },
        {
            name: 'CompuCom',
            title: 'Operations Team Lead',
            startDate: '2015-02-01',
            endDate: '2018-08-01',
            description:
                'Responsible for reporting requirements; which includes targets, specific data, anticipated outcomes and other key performance indicators.',
            responsibilities: [
                'Responsible for reporting requirements; which includes targets, specific data, anticipated outcomes and other key performance indicators',
                'Prepared, developed and conducted performance evaluations, make employment decisions, set up performance goals and targets for assigned teams.',
                'Developed and supervised a team of front line management and technical staff to ensure that the team is performing at the highest level of performance.',
            ],
        },
    ],
};
