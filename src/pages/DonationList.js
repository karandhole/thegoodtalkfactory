import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationListContent from '../components/donation/DonationListContent';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const DonationList = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Donation List"
                currentPage="Donation List" 
            />
            <DonationListContent />
            <FooterTwo />
        </>
    )
}

export default DonationList;