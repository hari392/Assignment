document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('aside a');
    const contentArea = document.getElementById('content-area');
  
    // Content for each topic
    const content = {
      topic1: `<h3> Sales Handover Information</h3>
      <h2>1.1 Project Overview</h2>
    <ul>
      <li><strong>Project Name:</strong> CanFin Implementation</li>
      <li><strong>Project Start Date:</strong> 2024-01-01</li>
      <li><strong>Target Go-Live Date:</strong> 2024-06-30</li>
      <li><strong>Contract Reference Number:</strong> CF123456</li>
      <li><strong>Contract Duration:</strong> 6 months</li>
      <li><strong>Project Scope Summary:</strong> Implementation of CanFin CRM and mobile application.</li>
    </ul>
    <h2>1.2 Customer Information</h2>
    <ul>
      <li><strong>Organization Name:</strong> CanFin Ltd.</li>
      <li><strong>Primary Business Domain:</strong> Financial Services</li>
      <li><strong>Business Scale:</strong> Large Enterprise</li>
      <li><strong>Current Systems/Platforms:</strong> Legacy CRM, SAP</li>
      <li><strong>Target Environment:</strong> Cloud-based CRM</li>
    </ul>
    <h2>1.3 Commercial Terms</h2>
    <ul>
      <li><strong>Contract Value:</strong> $1,000,000</li>
      <li><strong>Payment Terms:</strong> 50% upfront, 50% on completion</li>
      <li><strong>Payment Milestones:</strong> Initial payment, Final payment</li>
      <li><strong>Additional Cost Considerations:</strong> None</li>
    </ul>`,
      topic2: `<h3> Project Organization</h3>
      <h2>2.1 Governance Structure</h2>
    <ul>
      <li><strong>Steering Committee:</strong> Project Sponsor, Uncia and CanFin Homes Ltd Steering Committee representatives</li>
      <li><strong>Project Management:</strong> Uncia and CanFin Homes Ltd Project Managers</li>
      <li><strong>Working Teams:</strong>Functional Consultants,Technical Consultants,Development Consultants,Business Representatives,IT Manager,Solution Supervisors</li>
    </ul>
    <h2>2.2 Stakeholder Information</h2>
    <ul>
      <li><strong>Customer Team:</strong></li>
      <ul>
        <li><strong>Project Sponsor:</strong> TBD</li>
        <li><strong>Project Manager:</strong> TBD</li>
        <li><strong>Business Representatives:</strong> TBD</li>
        <li><strong>IT Team:</strong> TBD</li>
      </ul>
      <li><strong>Implementation Team:</strong></li>
      <ul>
        <li><strong>Project Manager:</strong> TBD</li>
        <li><strong>Technical Leads:</strong> TBD</li>
        <li><strong>Functional Consultants:</strong> TBD</li>
        <li><strong>Development Team:</strong> TBD</li>
        <li><strong>Quality Team:</strong> TBD</li>
        <li><strong>Infrastructure Team:</strong> TBD</li>
      </ul>
    </ul>
    <h2>2.3 Roles and Responsibilities</h2>
    <ul>
      <li><strong>Customer Responsibilities:</strong> TBD</li>
      <li><strong>Implementation Team Responsibilities:</strong> TBD</li>
      <li><strong>Third-Party Responsibilities:</strong> TBD</li>
    </ul>`,
      topic3: `<h3> Solution Scope</h3>
      <h2>3.1 Products/Modules</h2>
    <ul>
      <li><strong>Core Modules:</strong> Loan Origination System (LOS), Loan Management System (LMS)</li>
      <li><strong>Optional Modules:</strong> Deposits and General Ledger</li>
      <li><strong>Future Modules:</strong> TBD</li>
    </ul>
    <h2>3.2 Functional Requirements</h2>
    <ul>
      <li><strong>Business Processes:</strong> Loan origination, loan management, deposits, general ledger</li>
      <li><strong>Workflows:</strong> Customizable workflows for loan origination and management</li>
      <li><strong>Reports:</strong> Standard and custom reports for business processes</li>
      <li><strong>User Interface Requirements:</strong> User-friendly interface with Angular 12 frontend</li>
    </ul>
    <h2>3.3 Technical Requirements</h2>
    <ul>
      <li><strong>Infrastructure Requirements:</strong> Cloud-based deployment on Microsoft Azure</li>
      <li><strong>Integration Requirements:</strong> Integration with third-party applications such as CKYC, ADF, APAS, and more</li>
      <li><strong>Security Requirements:</strong> Multiple layers of security including network, host/device, data, and application level defenses</li>
      <li><strong>Performance Requirements:</strong> High availability, scalability, and fault tolerance</li>
    </ul>
    <h2>3.4 Data Requirements</h2>
    <ul>
      <li><strong>Data Migration Scope:</strong> Migration of critical master data, sanctioned application data, and active/closed accounts</li>
      <li><strong>Data Volume:</strong> Large volume of data from legacy systems</li>
      <li><strong>Data Quality Requirements:</strong> Ensuring data integrity and accuracy during migration</li>
      <li><strong>Data Retention Requirements:</strong> Compliance with regulatory requirements for data retention</li>
    </ul>`,
      topic4: `<h3> Implementation Approach</h3>
    <h2>4.1 Implementation Methodology</h2>
    <ul>
      <li><strong>Phase Breakdown:</strong> Initiation, planning, business analysis, solution finalization, configuration, customization, data migration, training, and go-live preparation</li>
      <li><strong>Deliverables:</strong> Configured product, training manuals, data migration scripts, integration points, and more</li>
      <li><strong>Timelines:</strong> Detailed project schedule with milestones and deadlines</li>
      <li><strong>Dependencies:</strong> Dependencies on third-party systems and customer-provided environments</li>
    </ul>
    <h2>4.2 Environment Strategy</h2>
    <ul>
      <li><strong>Development Environment:</strong> Separate environment for development activities</li>
      <li><strong>Testing Environment:</strong> Dedicated environment for testing and quality assurance</li>
      <li><strong>UAT Environment:</strong> User acceptance testing environment for customer validation</li>
      <li><strong>Production Environment:</strong> High availability production environment on Microsoft Azure</li>
      <li><strong>DR Environment:</strong> Disaster recovery environment with real-time replication</li>
    </ul>
    <h2>4.3 Testing Strategy</h2>
    <ul>
      <li><strong>Testing Phases:</strong> Unit testing, integration testing, system testing, user acceptance testing</li>
      <li><strong>Testing Types:</strong> Functional testing, performance testing, security testing, load testing</li>
      <li><strong>Testing Tools:</strong> Various testing tools for different phases and types of testing</li>
      <li><strong>Testing Responsibilities:</strong> Defined roles and responsibilities for testing activities</li>
    </ul>
    <h2>4.4 Training Strategy</h2>
    <ul>
      <li><strong>Training Approach:</strong> 'Train the Trainer' approach for process owners</li>
      <li><strong>Training Schedule:</strong> Detailed training schedule with sessions for different user groups</li>
      <li><strong>Training Materials:</strong> Comprehensive training materials including manuals and presentations</li>
      <li><strong>Training Environment:</strong> Dedicated training environment for hands-on practice</li>
    </ul>`,
      topic5: `<h3> Change Management</h3>
      <h2>5.1 Organizational Change Management</h2>
    <ul>
      <li><strong>Impact Assessment:</strong> Assessing the impact of changes on the organization</li>
      <li><strong>Stakeholder Management:</strong> Managing stakeholder expectations and communication</li>
      <li><strong>Communication Plan:</strong> Detailed plan for communicating changes to stakeholders</li>
      <li><strong>Resistance Management:</strong> Strategies for managing resistance to change</li>
    </ul>
    <h2>5.2 Business Process Management</h2>
    <ul>
      <li><strong>Process Mapping:</strong> Mapping current and future business processes</li>
      <li><strong>Process Documentation:</strong> Documenting business processes and workflows</li>
      <li><strong>Process Training:</strong> Training users on new business processes</li>
      <li><strong>Process Transition:</strong> Transitioning from old to new business processes</li>
    </ul>
    <h2>5.3 User Adoption Strategy</h2>
    <ul>
      <li><strong>Adoption Metrics:</strong> Metrics for measuring user adoption and engagement</li>
      <li><strong>Support Structure:</strong> Support structure for addressing user queries and issues</li>
      <li><strong>User Feedback:</strong> Collecting and analyzing user feedback for continuous improvement</li>
      <li><strong>Continuous Improvement:</strong> Ongoing efforts to improve user adoption and satisfaction</li>
    </ul>`,
      topic6: `<h3> Quality & Performance Management</h3>
      <h2>6.1 Quality Management</h2>
    <ul>
      <li><strong>Quality Objectives:</strong> Defining quality objectives for the project</li>
      <li><strong>Quality Metrics:</strong> Metrics for measuring quality and performance</li>
      <li><strong>Quality Control Process:</strong> Processes for ensuring quality throughout the project</li>
      <li><strong>Quality Reporting:</strong> Regular reporting on quality metrics and performance</li>
    </ul>
    <h2>6.2 Performance Management</h2>
    <ul>
      <li><strong>Performance Metrics:</strong> Metrics for measuring system performance</li>
      <li><strong>Monitoring Strategy:</strong> Strategy for monitoring system performance</li>
      <li><strong>Performance Testing:</strong> Testing system performance under different conditions</li>
      <li><strong>Optimization Process:</strong> Processes for optimizing system performance</li>
    </ul>`,
      topic7: `<h3> Security & Compliance</h3>
      <h2>7.1 Security Framework</h2>
    <ul>
      <li><strong>Access Control:</strong> Controlling access to system resources</li>
      <li><strong>Authentication & Authorization:</strong> Ensuring only authorized users can access the system</li>
      <li><strong>Security Monitoring:</strong> Monitoring system for security threats and vulnerabilities</li>
      <li><strong>Security Testing:</strong> Regular testing of system security</li>
    </ul>
    <h2>7.2 Compliance Management</h2>
    <ul>
      <li><strong>Regulatory Requirements:</strong> Compliance with regulatory requirements</li>
      <li><strong>Compliance Testing:</strong> Testing system for compliance with regulations</li>
      <li><strong>Audit Requirements:</strong> Regular audits to ensure compliance</li>
      <li><strong>Documentation Requirements:</strong> Maintaining documentation for compliance purposes</li>
    </ul>`,
      topic8: `<h3>Go-Live Preparation
</h3>
      <h2>8.1 Cutover Strategy</h2>
    <ul>
      <li><strong>Pre-Cutover Activities:</strong> Activities to be completed before cutover</li>
      <li><strong>Cutover Plan:</strong> Detailed plan for cutover to the new system</li>
      <li><strong>Rollback Plan:</strong> Plan for rolling back to the old system if needed</li>
      <li><strong>Post-Cutover Activities:</strong> Activities to be completed after cutover</li>
    </ul>
    <h2>8.2 Business Continuity</h2>
    <ul>
      <li><strong>Business Impact Analysis:</strong> Analyzing the impact of system changes on business operations</li>
      <li><strong>Contingency Plans:</strong> Plans for handling contingencies and emergencies</li>
      <li><strong>Recovery Procedures:</strong> Procedures for recovering from system failures</li>
      <li><strong>Emergency Response:</strong> Response plan for emergencies</li>
    </ul>
    <h2>8.3 Operational Readiness</h2>
    <ul>
      <li><strong>Operations Documentation:</strong> Documentation for operational procedures</li>
      <li><strong>Support Team Readiness:</strong> Ensuring support team is ready for go-live</li>
      <li><strong>Monitoring Setup:</strong> Setting up monitoring for system performance</li>
      <li><strong>Maintenance Procedures:</strong> Procedures for maintaining the system</li>
    </ul>`,
      topic9: `<h3> Post Go-Live Support</h3>
      <h2>9.1 Support Model</h2>
    <ul>
      <li><strong>Support Levels:</strong> Different levels of support for different types of issues</li>
      <li><strong>Support Team Structure:</strong> Structure of the support team</li>
      <li><strong>Escalation Matrix:</strong> Matrix for escalating issues to higher levels of support</li>
      <li><strong>SLA Framework:</strong> Service level agreements for support activities</li>
    </ul>
    <h2>9.2 Knowledge Management</h2>
    <ul>
      <li><strong>Knowledge Transfer Plan:</strong> Plan for transferring knowledge to the support team</li>
      <li><strong>Documentation Repository:</strong> Repository for storing documentation</li>
      <li><strong>Training Materials:</strong> Materials for training support team</li>
      <li><strong>Maintenance Guides:</strong> Guides for maintaining the system</li>
    </ul>`,
      topic10: `<h3> Sign-off Requirements</h3>
      <h2>10.1 Phase Sign-offs</h2>
    <ul>
      <li><strong>Requirement Sign-off:</strong> Sign-off on requirements</li>
      <li><strong>Design Sign-off:</strong> Sign-off on design</li>
      <li><strong>Testing Sign-off:</strong> Sign-off on testing</li>
      <li><strong>Training Sign-off:</strong> Sign-off on training</li>
    </ul>
    <h2>10.2 Final Sign-offs</h2>
    <ul>
      <li><strong>User Acceptance:</strong> Acceptance by users</li>
      <li><strong>Go-Live Approval:</strong> Approval for go-live</li>
      <li><strong>Project Closure:</strong> Closure of the project</li>
      <li><strong>Support Transition:</strong> Transition to support team</li>
    </ul>`,
      topic11: `<h3> Additional Information</h3>
      <h2>11.1 Assumptions & Dependencies</h2>
    <ul>
      <li><strong>Key Assumptions:</strong> Assumptions made during the project</li>
      <li><strong>External Dependencies:</strong> Dependencies on external systems and resources</li>
      <li><strong>Constraints:</strong> Constraints that may impact the project</li>
      <li><strong>Prerequisites:</strong> Prerequisites for project activities</li>
    </ul>
    <h2>11.2 Risk Management</h2>
    <ul>
      <li><strong>Risk Categories:</strong> Categories of risks</li>
      <li><strong>Risk Assessment:</strong> Assessing risks and their impact</li>
      <li><strong>Mitigation Strategies:</strong> Strategies for mitigating risks</li>
      <li><strong>Risk Monitoring:</strong> Monitoring risks throughout the project</li>
    </ul>`,
      
    };
  
   
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const topic = e.target.getAttribute('data-content');
        contentArea.innerHTML = content[topic] || '<h2>Not Found</h2><p>No content available.</p>';
      });
    });
  });
  