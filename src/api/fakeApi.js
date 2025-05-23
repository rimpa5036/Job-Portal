const companies = [
    {
        id: 1,
        name: "TechNova Solutions",
        industry: "Information Technology",
        location: "San Francisco, USA",
        email: "info@technova.com",
        contact: "+1-555-1234",
        salary: "$90,000 - $120,000",
        experience: "3-5 years",
        jobOverview: "Looking for a skilled software developer to join our dynamic web development team.",
        companyDescription: "TechNova Solutions is a leading software company specializing in innovative web and mobile applications."
    },
    {
        id: 2,
        name: "GreenLeaf Marketing",
        industry: "Marketing",
        location: "London, UK",
        email: "careers@greenleaf.co.uk",
        contact: "+44-20-1234-5678",
        salary: "$50,000 - $70,000",
        experience: "2-4 years",
        jobOverview: "Seeking a creative digital marketer to manage campaigns and boost our online presence.",
        companyDescription: "GreenLeaf Marketing is a digital agency focused on branding, SEO, and performance marketing."
    },
    {
        id: 3,
        name: "FinEdge Corp",
        industry: "Finance",
        location: "Toronto, Canada",
        email: "hr@finedge.ca",
        contact: "+1-416-555-7890",
        salary: "$75,000 - $95,000",
        experience: "4-6 years",
        jobOverview: "Hiring an experienced financial analyst to support strategic decision-making.",
        companyDescription: "FinEdge Corp is a trusted name in investment management and financial consulting services."
    }
];

export const fetchCompanies = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(companies);
        }, 1000);
    });
};

export const fetchCompanyById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const company = companies.find(c => c.id === id);
            resolve(company);
        }, 1000);
    });
};
