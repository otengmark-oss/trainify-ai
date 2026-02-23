import React from 'react';
import { DocumentUpload } from './DocumentUpload';
import { EmployeeManagement } from './EmployeeManagement';
import { TrainingStats } from './TrainingStats';

const BusinessOwnerDashboard = () => {
    return (
        <div>
            <h1>Business Owner Dashboard</h1>
            <DocumentUpload />
            <EmployeeManagement />
            <TrainingStats />
        </div>
    );
};

export default BusinessOwnerDashboard;