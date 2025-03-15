class DataManager {
    static instance = null;
    static VALID_KEYS = ['person', 'experience', 'skills'];

    constructor(resumeData) {
        this.resumeData = resumeData;
        this.person = {
            name: resumeData.Name,
            address: resumeData.Address,
            phone: resumeData.Phone,
            summary: resumeData["Professional Summary"],
            links: resumeData.Links
        };
    }

    // Extract all unique skills from experience
    extractAllSkills() {
        const skillSet = new Set(); // Use a Set to prevent duplicates

        // Loop through each experience
        this.resumeData.Experience.forEach((experience) => {
            // Add skills to the Set to prevent duplicates
            experience.Skills.forEach((skill) => {
                skillSet.add(skill);
            });
        });

        // Convert the Set back to an array
        return Array.from(skillSet);
    }

    // Store data with validation
    storeData() {
        try {
            sessionStorage.setItem("person", JSON.stringify(this.person));
            sessionStorage.setItem("experience", JSON.stringify(this.resumeData.Experience));
            sessionStorage.setItem("skills", JSON.stringify(this.extractAllSkills()));
            DataManager.instance = this;
        } catch (error) {
            console.error('Error storing data:', error);
            throw error;
        }
    }

    // Initialize the DataManager
    static initialize(resumeData) {
        if (!this.instance) {
            this.instance = new DataManager(resumeData);
            this.instance.storeData();
        }
        return this.instance;
    }

    // Validate key before operations
    static validateKey(key) {
        if (!this.VALID_KEYS.includes(key)) {
            throw new Error(`Invalid key: ${key}. Valid keys are: ${this.VALID_KEYS.join(', ')}`);
        }
    }

    // Get stored data with validation
    static getData(key) {
        this.validateKey(key);
        if (!this.hasData(key)) return null;
        try {
            const data = sessionStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(`Error retrieving ${key}:`, error);
            return null;
        }
    }

    // Check if data exists
    static hasData(key) {
        return sessionStorage.getItem(key) !== null;
    }

    // Get initialized instance
    static getInstance() {
        return this.instance;
    }

    // Clear stored data
    static clearData() {
        sessionStorage.clear();
    }

    // Convenience methods
    static getPerson() {
        return this.getData('person');
    }

    static getExperience() {
        return this.getData('experience');
    }

    static getSkills() {
        return this.getData('skills');
    }
}

export default DataManager;