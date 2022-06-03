export const response = {
    '_links': {
        'self': {
            'name': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021',
            'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
            'title': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021'
        }
    },
    'quote:contract_start_date': '2021-06-03',
    'quote:start_date': '2021-06-03',
    'quote:status': 'draft',
    '_options': {
        'links': [
            {
                'schema': {
                    'influencers': [
                        'quote:contract_start_date',
                        'quote:description'
                    ],
                    'properties': {
                        'quote:description': {
                            'type': 'string',
                            'maxLength': 20
                        },
                        'quote:contract_start_date': {
                            'format': 'date',
                            'type': 'string'
                        },
                        'quote:status': {
                            'oneOf': [{ 'description': 'language:en-GB', 'title': 'Not saved', 'enum': ['draft'] },
                                { 'description': 'language:en-GB', 'title': 'Saved', 'enum': ['in_force'] },
                                { 'description': 'language:en-GB', 'title': 'Transferred', 'enum': ['transferred'] }], 'type': 'string'
                        },
                    }
                },
                'method': 'PATCH',
                'rel': 'update',
                'mediaType': 'application/json',
                'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
                'title': 'Update a Quote'
            }
        ],
        'properties': {
            'required': ['quote:product_id', 'quote:distributor_id', 'quote:status', 'quote:contract_start_date'],
            'quote:contract_start_date': {
                'format': 'date',
                'type': 'string'
            },
            'quote:description': {
                'type': 'string',
                'maxLength': 20
            },
            'quote:start_date': {
                'format': 'date',
                'type': 'string'
            },
            'quote:status': {
                'oneOf': [{ 'description': 'language:en-GB', 'title': 'Not saved', 'enum': ['draft'] },
                    { 'description': 'language:en-GB', 'title': 'Saved', 'enum': ['in_force'] },
                    { 'description': 'language:en-GB', 'title': 'Transferred', 'enum': ['transferred'] }], 'type': 'string'
            },
        },
        'quote:description': null
    }
}

export const disableResponse = {
    '_links': {
        'self': {
            'name': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021',
            'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
            'title': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021'
        }
    },
    'quote:contract_start_date': '2021-06-03',
    '_options': {
        'links': [
            {
                'schema': {
                    'influencers': [
                        'quote:contract_start_date',
                        'quote:description'
                    ],
                    'properties': {
                        'quote:contract_start_date': {
                            'format': 'date',
                            'type': 'string'
                        }
                    }
                },
                'method': 'PATCH',
                'rel': 'update',
                'mediaType': 'application/json',
                'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
                'title': 'Update a Quote'
            }
        ],
        'title': 'Quote resource interactions',
        'properties': {
            'quote:contract_start_date': {
                'format': 'date',
                'type': 'string'
            },
            'quote:description': {
                'type': 'string',
                'maxLength': 20
            }
        },
        'required': [
            'quote:contract_start_date'
        ]
    },
    'quote:description': null
}

export const prefilled = {
    '_links': {
        'self': {
            'name': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021',
            'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
            'title': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021'
        }
    },
    'quote:contract_start_date': '2021-06-03',
    '_options': {
        'links': [
            {
                'schema': {
                    'influencers': [
                        'quote:contract_start_date',
                        'quote:description'
                    ],
                    'properties': {
                        'quote:description': {
                            'type': 'string',
                            'maxLength': 250
                        },
                        'quote:contract_start_date': {
                            'format': 'date',
                            'type': 'string'
                        }
                    }
                },
                'method': 'PATCH',
                'rel': 'update',
                'mediaType': 'application/json',
                'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
                'title': 'Update a Quote'
            }
        ],
        'title': 'Quote resource interactions',
        'properties': {
            'quote:contract_start_date': {
                'format': 'date',
                'type': 'string'
            },
            'quote:description': {
                'type': 'string',
                'maxLength': 250
            }
        },
        'required': [
            'quote:contract_start_date'
        ]
    },
    'quote:description': 'This is prefilled textarea'
}

export const errorResponse = {
    '_links': {
        'self': {
            'name': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021',
            'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
            'title': 'Quote QT000007752 - Mister Mryn2 HAUSER - OIUI UIUI - STHRT6776 - 03/06/2021'
        }
    },
    'quote:contract_start_date': '2021-06-03',
    '_options': {
        'links': [
            {
                'schema': {
                    'influencers': [
                        'quote:contract_start_date',
                        'quote:description'
                    ],
                    'properties': {
                        'quote:description': {
                            'type': 'string',
                            'maxLength': 20
                        },
                        'quote:contract_start_date': {
                            'format': 'date',
                            'type': 'string'
                        }
                    }
                },
                'method': 'PATCH',
                'rel': 'update',
                'mediaType': 'application/json',
                'href': 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYTsc',
                'title': 'Update a Quote'
            }
        ],
        'title': 'Quote resource interactions',
        'properties': {
            'quote:contract_start_date': {
                'format': 'date',
                'type': 'string'
            },
            'quote:description': {
                'type': 'string',
                'maxLength': 20
            }
        },
        'required': [
            'quote:contract_start_date'
        ]
    },
    'quote:description': 'This is Prefilled Value with limit exceeding MAXLENTGH. Check error by giving it a Blur or Change event.'
}

export const contracts = {
    '_count': '500+',
    '_links': {
        'next': {
            'href': 'http://20.33.40.95:13211/csc/insurance/contracts?_start=11&_num=10'
        },
        'item': [
            {
                'summary': {
                    'person:last_name': 'GRANDS',
                    'distributor_detail:identifier': '3574',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2022-06-02',
                    'distributor_detail:unique_identifier': '0404453574',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000255411',
                    'organization:legal_name': null,
                    'person:first_name': 'Afi1',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 02/06/2023',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000255411',
                    'contract:offer_number': 'QT000007670',
                    'organization:display_id': null,
                    'membership:display_id': '001000255411, Insured Car starting on 02/06/2023 - from 02/06/2023 to 99/99/9999',
                    'person:display_id': 'Mister Afi1 GRANDS - 100287575 -  Born On 10/05/1974 - LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN',
                    'contract:start_date': '2023-06-02',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000255411 : Mister Afi1 GRANDS - In Force - Effective on 02/06/2023',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GOou',
                'title': 'AVZK01/001000255411 : Mister Afi1 GRANDS - In Force - Effective on 02/06/2023'
            },
            {
                'summary': {
                    'person:last_name': 'TESTDEV',
                    'distributor_detail:identifier': '3683',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2022-01-06',
                    'distributor_detail:unique_identifier': '0404453574',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000242879',
                    'organization:legal_name': null,
                    'person:first_name': 'Adi19',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 06/01/2023',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000242879',
                    'contract:offer_number': 'QT000007094',
                    'organization:display_id': null,
                    'membership:display_id': '001000242879, Insured Car starting on 06/01/2023 - from 06/01/2023 to 99/99/9999',
                    'person:display_id': 'Mister Adi19 TESTDEV - 100238934 -  Born On 10/08/1954 - LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN',
                    'contract:start_date': '2023-01-06',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000242879 : Mister Adi19 TESTDEV - In Force - Effective on 06/01/2023',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GMei',
                'title': 'AVZK01/001000242879 : Mister Adi19 TESTDEV - In Force - Effective on 06/01/2023'
            },
            {
                'summary': {
                    'person:last_name': 'FEDERER',
                    'distributor_detail:identifier': '3588',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2022-03-22',
                    'distributor_detail:unique_identifier': '0404453574',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000210042',
                    'organization:legal_name': null,
                    'person:first_name': 'Milosha6',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 22/03/2022',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000210042',
                    'contract:offer_number': 'QT000005857',
                    'organization:display_id': null,
                    'membership:display_id': '001000210042, Insured Car starting on 22/03/2022 - from 22/03/2022 to 99/99/9999',
                    'person:display_id': 'Lady Milosha6 FEDERER - 100061094 -  Born On 10/08/1980 - , 1723 NE NOORD SCHARWOUDE',
                    'contract:start_date': '2022-03-22',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000210042 : Lady Milosha6 FEDERER - In Force - Effective on 22/03/2022',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GN6I',
                'title': 'AVZK01/001000210042 : Lady Milosha6 FEDERER - In Force - Effective on 22/03/2022'
            },
            {
                'summary': {
                    'person:last_name': 'MARTIN',
                    'distributor_detail:identifier': '1111',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2022-01-01',
                    'distributor_detail:unique_identifier': '0663821676',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000218126',
                    'organization:legal_name': null,
                    'person:first_name': 'Charly',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 01/01/2022',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000218126',
                    'contract:offer_number': null,
                    'organization:display_id': null,
                    'membership:display_id': '001000218126, Insured Car starting on 01/01/2022 - from 01/01/2022 to 99/99/9999',
                    'person:display_id': 'Mister Charly MARTIN - 100132244 -  Born On 01/01/2000 - Abbaye de la Cambre, 1000 BRUXELLES',
                    'contract:start_date': '2022-01-01',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000218126 : Mister Charly MARTIN - In Force - Effective on 01/01/2022',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GIOC',
                'title': 'AVZK01/001000218126 : Mister Charly MARTIN - In Force - Effective on 01/01/2022'
            },
            {
                'summary': {
                    'person:last_name': 'MARTIN',
                    'distributor_detail:identifier': '1111',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2022-01-01',
                    'distributor_detail:unique_identifier': '0663821676',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000219540',
                    'organization:legal_name': null,
                    'person:first_name': 'Charly',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 01/01/2022',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000219540',
                    'contract:offer_number': null,
                    'organization:display_id': null,
                    'membership:display_id': '001000219540, Insured Car starting on 01/01/2022 - from 01/01/2022 to 99/99/9999',
                    'person:display_id': 'Mister Charly MARTIN - 100132244 -  Born On 01/01/2000 - Abbaye de la Cambre, 1000 BRUXELLES',
                    'contract:start_date': '2022-01-01',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000219540 : Mister Charly MARTIN - In Force - Effective on 01/01/2022',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GIe0',
                'title': 'AVZK01/001000219540 : Mister Charly MARTIN - In Force - Effective on 01/01/2022'
            },
            {
                'summary': {
                    'person:last_name': 'LINKED6',
                    'distributor_detail:identifier': '1111',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2021-08-04',
                    'distributor_detail:unique_identifier': '0663821676',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000191450',
                    'organization:legal_name': null,
                    'person:first_name': 'Céu',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 04/08/2021',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000191450',
                    'contract:offer_number': null,
                    'organization:display_id': null,
                    'membership:display_id': '001000191450, Insured Car starting on 04/08/2021 - from 04/08/2021 to 99/99/9999',
                    'person:display_id': 'Mrs Céu LINKED6 - 100129074 -  Born On 01/01/1982 - Abbaye de la Cambre, 1000 BRUXELLES',
                    'contract:start_date': '2021-08-04',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000191450 : Mrs Céu LINKED6 - In Force - Effective on 04/08/2021',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GDhY',
                'title': 'AVZK01/001000191450 : Mrs Céu LINKED6 - In Force - Effective on 04/08/2021'
            },
            {
                'summary': {
                    'person:last_name': 'DEPP',
                    'distributor_detail:identifier': '1552',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2021-07-05',
                    'distributor_detail:unique_identifier': '0464366813',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000224085',
                    'organization:legal_name': null,
                    'person:first_name': 'Johnny',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Camping car starting on 05/07/2021',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000224085',
                    'contract:offer_number': null,
                    'organization:display_id': null,
                    'membership:display_id': '001000224085, Insured Camping car starting on 05/07/2021 - from 05/07/2021 to 99/99/9999',
                    'person:display_id': 'Mister Johnny DEPP - 2345678 -  Born On 00/00/0000 - BRUSSELSTRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT 614, 1700 DILBEEK',
                    'contract:start_date': '2021-07-05',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000224085 : Mister Johnny DEPP - In Force - Effective on 05/07/2021',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GJHM',
                'title': 'AVZK01/001000224085 : Mister Johnny DEPP - In Force - Effective on 05/07/2021'
            },
            {
                'summary': {
                    'person:last_name': 'TESTDEV',
                    'distributor_detail:identifier': '3574',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2021-07-04',
                    'distributor_detail:unique_identifier': '0404453574',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '035000291041',
                    'organization:legal_name': null,
                    'person:first_name': 'Afi2',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Home starting on 04/07/2021',
                    'contract:marketing_product_number': 'VZWP01',
                    'contract:proposal_number': '035000291041',
                    'contract:offer_number': 'QT000006186',
                    'organization:display_id': null,
                    'membership:display_id': '035000291041, Insured Home starting on 04/07/2021 - from 04/07/2021 to 99/99/9999',
                    'person:display_id': 'Mister Afi2 TESTDEV - 100158035 -  Born On 10/08/1974 - LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN',
                    'contract:start_date': '2021-07-04',
                    'contract:product_identifier': 'VZWP01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Home Insurance+'
                },
                'name': 'VZWP01/035000291041 : Mister Afi2 TESTDEV - In Force - Effective on 04/07/2021',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GIqG',
                'title': 'VZWP01/035000291041 : Mister Afi2 TESTDEV - In Force - Effective on 04/07/2021'
            },
            {
                'summary': {
                    'person:last_name': 'IVANOVA',
                    'distributor_detail:identifier': '1571',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2021-06-20',
                    'distributor_detail:unique_identifier': '0446666786',
                    'contract:status': 'not_issued',
                    'contract:proposition_number': null,
                    'contract:number': '001000248640',
                    'organization:legal_name': null,
                    'person:first_name': 'Lili',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'Car starting on 20/06/2021',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000248640',
                    'contract:offer_number': null,
                    'organization:display_id': null,
                    'membership:display_id': '001000248640, Insured Car starting on 20/06/2021 - from 20/06/2021 to 99/99/9999',
                    'person:display_id': 'Mister Lili IVANOVA - 2177598 -  Born On 10/12/1948 - LANGE SCHOLIERSSTRAAT 57, box 2, 2060 ANTWERPEN',
                    'contract:start_date': '2021-06-20',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000248640 : Mister Lili IVANOVA - In Force - Effective on 20/06/2021',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GNgu',
                'title': 'AVZK01/001000248640 : Mister Lili IVANOVA - In Force - Effective on 20/06/2021'
            },
            {
                'summary': {
                    'person:last_name': 'TESTDEV',
                    'distributor_detail:identifier': '3588',
                    'contract:proposition_status': 'transferred',
                    'contract:renewal_date': '2022-06-15',
                    'distributor_detail:unique_identifier': '0404453574',
                    'contract:status': 'in_force',
                    'contract:proposition_number': null,
                    'contract:number': '001000262481',
                    'organization:legal_name': null,
                    'person:first_name': 'Gabi2',
                    'contract:offer_type': null,
                    'insured_risk:display_id': 'PEUGEOT 0009 223232323',
                    'contract:marketing_product_number': 'AVZK01',
                    'contract:proposal_number': '001000262481',
                    'contract:offer_number': 'QT000008041',
                    'organization:display_id': null,
                    'membership:display_id': '001000262481, Insured PEUGEOT 0009 223232323 - from 15/06/2021 to 99/99/9999',
                    'person:display_id': 'Mister Gabi2 TESTDEV - 100218476 -  Born On 10/08/1984 - LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN',
                    'contract:start_date': '2021-06-15',
                    'contract:product_identifier': 'AVZK01',
                    'contract:product_type': 'multi_risk',
                    'contract:product_label': 'Car Insurance'
                },
                'name': 'AVZK01/001000262481 : Mister Gabi2 TESTDEV - In Force - Effective on 15/06/2021',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts/ID-W4Fb6GPuA',
                'title': 'AVZK01/001000262481 : Mister Gabi2 TESTDEV - In Force - Effective on 15/06/2021'
            }
        ],
        'self': {
            'name': 'Contract',
            'href': 'http://20.33.40.95:13211/csc/insurance/contracts',
            'title': 'Contract'
        },
        'up': {
            'href': 'http://20.33.40.95:13211/csc/insurance'
        },
        'cscrel:item-type': [
            {
                'href': 'http://20.33.40.95:13211/csc/insurance/schemas/contracts/individualContractDocument'
            },
            {
                'href': 'http://20.33.40.95:13211/csc/insurance/schemas/contracts/groupContractDocument'
            }
        ],
        'type': [
            {
                'href': 'http://20.33.40.95:13211/csc/insurance/schemas/system/factory'
            },
            {
                'href': 'http://20.33.40.95:13211/csc/insurance/schemas/contracts/contractCollection'
            }
        ],
        'first': {
            'href': 'http://20.33.40.95:13211/csc/insurance/contracts?_num=10'
        }
    },
    '_options': {
        'links': [
            {
                'schema': {
                    'properties': {
                        '_count': {
                            'type': 'integer',
                            'minimum': 500
                        },
                        '_start': {
                            'type': 'integer',
                            'minimum': 0
                        },
                        '_embed': {
                            'oneOf': [
                                'none',
                                {
                                    'type': 'array',
                                    'items': {
                                        'type': 'string'
                                    }
                                }
                            ]
                        },
                        '_date_effect': {
                            'format': 'date',
                            'type': 'string'
                        },
                        '_options': {
                            'type': 'boolean'
                        },
                        '_num': {
                            'type': 'integer',
                            'minimum': 20
                        },
                        '_sort': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            }
                        }
                    }
                },
                'method': 'GET',
                'rel': 'search-cs-contract-owner-contract-list',
                'mediaType': 'application/vnd.hal+json',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts?_inquiry=cs_contract_owner_contract_list',
                'title': 'Search for a Contract with inquiry cs_contract_owner_contract_list'
            },
            {
                'schema': {
                    'properties': {
                        'organization:client_number': {
                            'type': 'string',
                            'maxLength': 18
                        },
                        '_count': {
                            'type': 'integer',
                            'minimum': 500
                        },
                        '_start': {
                            'type': 'integer',
                            'minimum': 0
                        },
                        '_embed': {
                            'oneOf': [
                                'none',
                                {
                                    'type': 'array',
                                    'items': {
                                        'type': 'string'
                                    }
                                }
                            ]
                        },
                        '_date_effect': {
                            'format': 'date',
                            'type': 'string'
                        },
                        'person:client_number': {
                            'type': 'string',
                            'maxLength': 18
                        },
                        'contract:status': {
                            'oneOf': [
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Cancelled',
                                    'enum': [
                                        'cancelled'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Formal Request',
                                    'enum': [
                                        'formal_request'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'In Force',
                                    'enum': [
                                        'in_force'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Not issued',
                                    'enum': [
                                        'not_issued'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Not Taken Out',
                                    'enum': [
                                        'not_taken_out'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Not Taken Up',
                                    'enum': [
                                        'not_taken_up'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'On Expiry',
                                    'enum': [
                                        'on_expiry'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Paid-up',
                                    'enum': [
                                        'paid_up'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Proposition',
                                    'enum': [
                                        'proposition'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Proposition Rejected',
                                    'enum': [
                                        'proposition_rejected'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Expired',
                                    'enum': [
                                        'regular_premium'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Replaced',
                                    'enum': [
                                        'replaced'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Surrendered',
                                    'enum': [
                                        'surrender'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Suspended',
                                    'enum': [
                                        'suspended'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Transferred',
                                    'enum': [
                                        'transferred'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Unsettled',
                                    'enum': [
                                        'unsettled'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Waiting Certification',
                                    'enum': [
                                        'waiting_certification'
                                    ]
                                }
                            ],
                            'type': 'string'
                        },
                        '_options': {
                            'type': 'boolean'
                        },
                        '_num': {
                            'type': 'integer',
                            'minimum': 20
                        },
                        'contract:number': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        '_sort': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            }
                        }
                    }
                },
                'method': 'GET',
                'rel': 'search-s-contract-number',
                'mediaType': 'application/vnd.hal+json',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts?_inquiry=s_contract_number',
                'title': 'Search for a Contract with inquiry s_contract_number'
            },
            {
                'schema': {
                    'properties': {
                        'organization_detail:branch_number': {
                            'type': 'string',
                            'maxLength': 10
                        },
                        'contract_start_date_min': {
                            'format': 'date',
                            'type': 'string'
                        },
                        'organization:client_number': {
                            'type': 'string',
                            'maxLength': 18
                        },
                        '_embed': {
                            'oneOf': [
                                'none',
                                {
                                    'type': 'array',
                                    'items': {
                                        'type': 'string'
                                    }
                                }
                            ]
                        },
                        'organization:unique_identifier': {
                            'type': 'string',
                            'maxLength': 18
                        },
                        '_date_effect': {
                            'format': 'date',
                            'type': 'string'
                        },
                        'moped:model': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'trailer:model': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'organization_detail:organization_number': {
                            'type': 'string',
                            'maxLength': 20
                        },
                        'van:registration_number': {
                            'type': 'string',
                            'maxLength': 12
                        },
                        '_sort': {
                            'type': 'array',
                            'items': {
                                'type': 'string',
                                'enum': [
                                    'distributor_detail:unique_identifier',
                                    '-distributor_detail:unique_identifier',
                                    'contract:start_date',
                                    '-contract:start_date'
                                ]
                            }
                        },
                        'contract_start_date_max': {
                            'format': 'date',
                            'type': 'string'
                        },
                        'person:birth_date': {
                            'format': 'date',
                            'type': 'string'
                        },
                        'moped:registration_number': {
                            'type': 'string',
                            'maxLength': 12
                        },
                        'distributor_detail:unique_identifier': {
                            'type': 'string',
                            'maxLength': 10
                        },
                        'trailer:make': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'contract:status': {
                            'oneOf': [
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Cancelled',
                                    'enum': [
                                        'cancelled'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Formal Request',
                                    'enum': [
                                        'formal_request'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'In Force',
                                    'enum': [
                                        'in_force'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Not issued',
                                    'enum': [
                                        'not_issued'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Not Taken Out',
                                    'enum': [
                                        'not_taken_out'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Not Taken Up',
                                    'enum': [
                                        'not_taken_up'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'On Expiry',
                                    'enum': [
                                        'on_expiry'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Paid-up',
                                    'enum': [
                                        'paid_up'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Proposition',
                                    'enum': [
                                        'proposition'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Proposition Rejected',
                                    'enum': [
                                        'proposition_rejected'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Expired',
                                    'enum': [
                                        'regular_premium'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Replaced',
                                    'enum': [
                                        'replaced'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Surrendered',
                                    'enum': [
                                        'surrender'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Suspended',
                                    'enum': [
                                        'suspended'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Transferred',
                                    'enum': [
                                        'transferred'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Unsettled',
                                    'enum': [
                                        'unsettled'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Waiting Certification',
                                    'enum': [
                                        'waiting_certification'
                                    ]
                                }
                            ],
                            'type': 'string'
                        },
                        'organization_detail_v_a_t_number_be': {
                            'type': 'string',
                            'maxLength': 16
                        },
                        'motorcycle:make': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'motorcycle:registration_number': {
                            'type': 'string',
                            'maxLength': 12
                        },
                        'automobile:make': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'postal_address:street_number': {
                            'type': 'string',
                            'maxLength': 15
                        },
                        'organization_detail:b_c_e_number': {
                            'type': 'string',
                            'maxLength': 10
                        },
                        'person:last_name': {
                            'type': 'string',
                            'maxLength': 70
                        },
                        'postal_address:city_name': {
                            'type': 'string',
                            'maxLength': 70
                        },
                        '_start': {
                            'type': 'integer',
                            'minimum': 0
                        },
                        'van:make': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'moped:make': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'automobile:registration_number': {
                            'type': 'string',
                            'maxLength': 12
                        },
                        'motorcycle:model': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        '_options': {
                            'type': 'boolean'
                        },
                        'contract:insurance_type': {
                            'oneOf': [
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Group',
                                    'enum': [
                                        'group'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Individual',
                                    'enum': [
                                        'individual'
                                    ]
                                },
                                {
                                    'description': 'language:en-GB',
                                    'title': 'Open Group',
                                    'enum': [
                                        'open_group'
                                    ]
                                }
                            ],
                            'type': 'string'
                        },
                        'contract:number': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        '_count': {
                            'type': 'integer',
                            'minimum': 500
                        },
                        'organization_detail:n_o_s_s_number': {
                            'type': 'string',
                            'maxLength': 12
                        },
                        'automobile:model': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'organization:postal_code': {
                            'type': 'string',
                            'maxLength': 10
                        },
                        'contract:product_identifier': {
                            'type': 'string',
                            'maxLength': 11
                        },
                        'postal_address:postal_code': {
                            'type': 'string',
                            'maxLength': 10
                        },
                        'organization_detail:registration_number': {
                            'type': 'string',
                            'maxLength': 20
                        },
                        'distributor_detail:identifier': {
                            'type': 'string',
                            'maxLength': 10
                        },
                        'van:model': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'organization_detail:numero_s_i_r_e_n': {
                            'type': 'string',
                            'maxLength': 9
                        },
                        'postal_address:street_name': {
                            'type': 'string',
                            'maxLength': 160
                        },
                        '_num': {
                            'type': 'integer',
                            'minimum': 20
                        },
                        'organization:legal_name': {
                            'type': 'string',
                            'maxLength': 70
                        },
                        'person:first_name': {
                            'type': 'string',
                            'maxLength': 40
                        },
                        'person:first_name_normalized': {
                            'type': 'string',
                            'maxLength': 40
                        },
                        'organization:referential': {
                            'type': 'boolean'
                        },
                        'person:client_number': {
                            'type': 'string',
                            'maxLength': 18
                        },
                        'postal_address:box_number': {
                            'type': 'string',
                            'maxLength': 8
                        },
                        'contract:offer_number': {
                            'type': 'string',
                            'maxLength': 30
                        },
                        'organization_detail_v_a_t_number': {
                            'type': 'string',
                            'maxLength': 16
                        },
                        'trailer:registration_number': {
                            'type': 'string',
                            'maxLength': 12
                        },
                        'organization:trade_name': {
                            'type': 'string',
                            'maxLength': 70
                        }
                    }
                },
                'method': 'GET',
                'rel': 'search',
                'mediaType': 'application/vnd.hal+json',
                'href': 'http://20.33.40.95:13211/csc/insurance/contracts',
                'title': 'Search for a Contract  by criteria'
            }
        ],
        'title': 'Contract collection interactions',
        'properties': {
            'oneOf': [
                {
                    '_count': {
                        'pattern': '^\\\\[0-9]+\\\\+$',
                        'type': 'string'
                    }
                },
                {
                    '_count': {
                        'type': 'integer'
                    }
                }
            ],
            '_links': {
                'type': 'object',
                'properties': {
                    'item': {
                        'type': 'object',
                        'properties': {
                            'summary': {
                                'type': 'object',
                                'properties': {
                                    'oneOf': [
                                        {
                                            'person:last_name': {
                                                'type': 'string',
                                                'maxLength': 70
                                            },
                                            'distributor_detail:identifier': {
                                                'type': 'string',
                                                'maxLength': 10
                                            },
                                            'contract:renewal_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:proposition_status': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Deferred',
                                                        'enum': [
                                                            'deferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Rejected',
                                                        'enum': [
                                                            'rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'To Transfer',
                                                        'enum': [
                                                            'to_transfer'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transferred',
                                                        'enum': [
                                                            'transferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Under Review',
                                                        'enum': [
                                                            'under_review'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Waiting Acceptance',
                                                        'enum': [
                                                            'waiting_acceptance'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'distributor_detail:unique_identifier': {
                                                'type': 'string',
                                                'maxLength': 10
                                            },
                                            'contract:status': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Cancelled',
                                                        'enum': [
                                                            'cancelled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Formal Request',
                                                        'enum': [
                                                            'formal_request'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'In Force',
                                                        'enum': [
                                                            'in_force'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not issued',
                                                        'enum': [
                                                            'not_issued'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Up',
                                                        'enum': [
                                                            'not_taken_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'On Expiry',
                                                        'enum': [
                                                            'on_expiry'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Paid-up',
                                                        'enum': [
                                                            'paid_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Proposition',
                                                        'enum': [
                                                            'proposition'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Proposition Rejected',
                                                        'enum': [
                                                            'proposition_rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Expired',
                                                        'enum': [
                                                            'regular_premium'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Replaced',
                                                        'enum': [
                                                            'replaced'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Surrendered',
                                                        'enum': [
                                                            'surrender'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Suspended',
                                                        'enum': [
                                                            'suspended'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transferred',
                                                        'enum': [
                                                            'transferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Unsettled',
                                                        'enum': [
                                                            'unsettled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Waiting Certification',
                                                        'enum': [
                                                            'waiting_certification'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:proposition_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'organization:legal_name': {
                                                'type': 'string',
                                                'maxLength': 70
                                            },
                                            'person:first_name': {
                                                'type': 'string',
                                                'maxLength': 40
                                            },
                                            'contract:offer_type': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Amendment',
                                                        'enum': [
                                                            'amendment'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'New business',
                                                        'enum': [
                                                            'new_business'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'insured_risk:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'contract:marketing_product_number': {
                                                'type': 'string',
                                                'maxLength': 11
                                            },
                                            'contract:proposal_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:offer_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'organization:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'person:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'membership:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'contract:start_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:product_identifier': {
                                                'type': 'string',
                                                'maxLength': 11
                                            },
                                            'contract:product_type': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Vehicles',
                                                        'enum': [
                                                            'auto'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Health',
                                                        'enum': [
                                                            'health'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Life',
                                                        'enum': [
                                                            'life'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Others',
                                                        'enum': [
                                                            'miscellaneous'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Multi-risks',
                                                        'enum': [
                                                            'multi_risk'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Pension',
                                                        'enum': [
                                                            'pension'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Residential',
                                                        'enum': [
                                                            'property'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Term Insurance',
                                                        'enum': [
                                                            'risk_protection'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Savings',
                                                        'enum': [
                                                            'savings'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Standard',
                                                        'enum': [
                                                            'standard'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:product_label': {
                                                'type': 'string',
                                                'maxLength': 60
                                            }
                                        },
                                        {
                                            'person:last_name': {
                                                'type': 'string',
                                                'maxLength': 70
                                            },
                                            'distributor_detail:identifier': {
                                                'type': 'string',
                                                'maxLength': 10
                                            },
                                            'contract:renewal_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:proposition_status': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Deferred',
                                                        'enum': [
                                                            'deferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Rejected',
                                                        'enum': [
                                                            'rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'To Transfer',
                                                        'enum': [
                                                            'to_transfer'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transferred',
                                                        'enum': [
                                                            'transferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Under Review',
                                                        'enum': [
                                                            'under_review'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Waiting Acceptance',
                                                        'enum': [
                                                            'waiting_acceptance'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'distributor_detail:unique_identifier': {
                                                'type': 'string',
                                                'maxLength': 10
                                            },
                                            'contract:status': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Cancelled',
                                                        'enum': [
                                                            'cancelled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Formal Request',
                                                        'enum': [
                                                            'formal_request'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'In Force',
                                                        'enum': [
                                                            'in_force'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not issued',
                                                        'enum': [
                                                            'not_issued'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Up',
                                                        'enum': [
                                                            'not_taken_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'On Expiry',
                                                        'enum': [
                                                            'on_expiry'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Paid-up',
                                                        'enum': [
                                                            'paid_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Proposition',
                                                        'enum': [
                                                            'proposition'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Proposition Rejected',
                                                        'enum': [
                                                            'proposition_rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Expired',
                                                        'enum': [
                                                            'regular_premium'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Replaced',
                                                        'enum': [
                                                            'replaced'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Surrendered',
                                                        'enum': [
                                                            'surrender'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Suspended',
                                                        'enum': [
                                                            'suspended'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transferred',
                                                        'enum': [
                                                            'transferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Unsettled',
                                                        'enum': [
                                                            'unsettled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Waiting Certification',
                                                        'enum': [
                                                            'waiting_certification'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:proposition_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'organization:legal_name': {
                                                'type': 'string',
                                                'maxLength': 70
                                            },
                                            'person:first_name': {
                                                'type': 'string',
                                                'maxLength': 40
                                            },
                                            'contract:offer_type': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Amendment',
                                                        'enum': [
                                                            'amendment'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'New business',
                                                        'enum': [
                                                            'new_business'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'insured_risk:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'contract:marketing_product_number': {
                                                'type': 'string',
                                                'maxLength': 11
                                            },
                                            'contract:proposal_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:offer_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'organization:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'person:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'membership:display_id': {
                                                'type': 'string',
                                                'maxLength': 75
                                            },
                                            'contract:start_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:product_identifier': {
                                                'type': 'string',
                                                'maxLength': 11
                                            },
                                            'contract:product_type': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Vehicles',
                                                        'enum': [
                                                            'auto'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Health',
                                                        'enum': [
                                                            'health'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Life',
                                                        'enum': [
                                                            'life'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Others',
                                                        'enum': [
                                                            'miscellaneous'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Multi-risks',
                                                        'enum': [
                                                            'multi_risk'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Pension',
                                                        'enum': [
                                                            'pension'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Residential',
                                                        'enum': [
                                                            'property'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Term Insurance',
                                                        'enum': [
                                                            'risk_protection'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Savings',
                                                        'enum': [
                                                            'savings'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Standard',
                                                        'enum': [
                                                            'standard'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:product_label': {
                                                'type': 'string',
                                                'maxLength': 60
                                            }
                                        },
                                        {
                                            'contract:status_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:status_motive': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:n/a',
                                                        'title': 'cancelation',
                                                        'enum': [
                                                            'cancelation'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Claim',
                                                        'enum': [
                                                            'claim'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Client\u2019s Request',
                                                        'enum': [
                                                            'client_requested'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Membership Deferral',
                                                        'enum': [
                                                            'deferral_member'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:n/a',
                                                        'title': 'deferred',
                                                        'enum': [
                                                            'deferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Client deceased',
                                                        'enum': [
                                                            'deseased'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'End of risk',
                                                        'enum': [
                                                            'end_of_risk'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'End of risk coverage',
                                                        'enum': [
                                                            'end_of_risk_coverage'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Error in data entry',
                                                        'enum': [
                                                            'entry_data_error'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Expired',
                                                        'enum': [
                                                            'expired'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Input Error',
                                                        'enum': [
                                                            'input_error'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Insured Refusal',
                                                        'enum': [
                                                            'insured_rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Membership Refusal',
                                                        'enum': [
                                                            'issue_rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Awaiting Special Conditions',
                                                        'enum': [
                                                            'medical_decision'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Missing Deposit (O.N.)',
                                                        'enum': [
                                                            'missing_deposit'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Missing Deposit',
                                                        'enum': [
                                                            'missing_deposit_st'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'No Longer Insured',
                                                        'enum': [
                                                            'no_longer_insured'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'None',
                                                        'enum': [
                                                            'none'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Official Notice',
                                                        'enum': [
                                                            'official_notice'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Other',
                                                        'enum': [
                                                            'other'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Paid-Up',
                                                        'enum': [
                                                            'paid_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Replacement',
                                                        'enum': [
                                                            'replacement'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Insurer\u2019s Decision',
                                                        'enum': [
                                                            'requested_by_insurer'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Returned Check',
                                                        'enum': [
                                                            'returned_check'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Risk increase',
                                                        'enum': [
                                                            'risk_increase'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Sale/Legal recovery',
                                                        'enum': [
                                                            'sale_recovery'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Deduction/Surrender/Withdrawal',
                                                        'enum': [
                                                            'surrender'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:n/a',
                                                        'title': 'suspended',
                                                        'enum': [
                                                            'suspended'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transfer',
                                                        'enum': [
                                                            'transfer'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Non-Payment',
                                                        'enum': [
                                                            'unpaid'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Unsettled',
                                                        'enum': [
                                                            'unsettled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Withdrawal',
                                                        'enum': [
                                                            'withdrawal'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Better tariff at competitor',
                                                        'enum': [
                                                            'arg_better_tariff_competitor'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Disappearance of insured risk - Company car',
                                                        'enum': [
                                                            'arg_disappear_risk_company_car'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Disappearance of insured risk - Deceased',
                                                        'enum': [
                                                            'arg_disappear_risk_deceased'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Disappearance of insured risk - Moved',
                                                        'enum': [
                                                            'arg_disappear_risk_moved'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Disappearance of insured risk - Termination lease/Sale risk',
                                                        'enum': [
                                                            'arg_disappear_risk_sale'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Disappearance of insured risk - Sold car',
                                                        'enum': [
                                                            'arg_disappear_risk_sold_car'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Dissatisfied with claim management',
                                                        'enum': [
                                                            'arg_dissatisfied_claim'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Dissatisfied with product',
                                                        'enum': [
                                                            'arg_dissatisfied_product'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to intentionally incorrect/withheld of information',
                                                        'enum': [
                                                            'arg_insr_int_incorrect_info'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to invalid inspection certificate',
                                                        'enum': [
                                                            'arg_insr_invalid_certificate'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to unintentionally incorrect/withheld of information',
                                                        'enum': [
                                                            'arg_insr_unint_incorrect_info'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer - suspension of the agreement',
                                                        'enum': [
                                                            'arg_insurer_agreement_suspend'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to bankruptcy',
                                                        'enum': [
                                                            'arg_insurer_bankruptcy'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to change of the insurance conditions',
                                                        'enum': [
                                                            'arg_insurer_change_condition'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to claims',
                                                        'enum': [
                                                            'arg_insurer_claims'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to decease',
                                                        'enum': [
                                                            'arg_insurer_decease'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to increased risk',
                                                        'enum': [
                                                            'arg_insurer_increased_risk'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer due to non-payment',
                                                        'enum': [
                                                            'arg_insurer_non_payment'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By insurer at renewal',
                                                        'enum': [
                                                            'arg_insurer_renewal'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Home insurance linked to a mortgage at another mortgage company',
                                                        'enum': [
                                                            'arg_mortrage_another_company'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - Other (fill in motivation manually)',
                                                        'enum': [
                                                            'arg_other'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'By client - New risk falls outside acceptance criteria',
                                                        'enum': [
                                                            'arg_risk_outside_criteria'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:end_validity_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:renewal_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:proposition_status': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Deferred',
                                                        'enum': [
                                                            'deferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Rejected',
                                                        'enum': [
                                                            'rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'To Transfer',
                                                        'enum': [
                                                            'to_transfer'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transferred',
                                                        'enum': [
                                                            'transferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Under Review',
                                                        'enum': [
                                                            'under_review'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Waiting Acceptance',
                                                        'enum': [
                                                            'waiting_acceptance'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:status': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Cancelled',
                                                        'enum': [
                                                            'cancelled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Formal Request',
                                                        'enum': [
                                                            'formal_request'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'In Force',
                                                        'enum': [
                                                            'in_force'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not issued',
                                                        'enum': [
                                                            'not_issued'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Out',
                                                        'enum': [
                                                            'not_taken_out'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Not Taken Up',
                                                        'enum': [
                                                            'not_taken_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'On Expiry',
                                                        'enum': [
                                                            'on_expiry'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Paid-up',
                                                        'enum': [
                                                            'paid_up'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Proposition',
                                                        'enum': [
                                                            'proposition'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Proposition Rejected',
                                                        'enum': [
                                                            'proposition_rejected'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Expired',
                                                        'enum': [
                                                            'regular_premium'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Replaced',
                                                        'enum': [
                                                            'replaced'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Surrendered',
                                                        'enum': [
                                                            'surrender'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Suspended',
                                                        'enum': [
                                                            'suspended'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Transferred',
                                                        'enum': [
                                                            'transferred'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Unsettled',
                                                        'enum': [
                                                            'unsettled'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Waiting Certification',
                                                        'enum': [
                                                            'waiting_certification'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:nature': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Additional',
                                                        'enum': [
                                                            'additional'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Base',
                                                        'enum': [
                                                            'base'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Base + Supplementary cover',
                                                        'enum': [
                                                            'base_supplementary'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Family extension',
                                                        'enum': [
                                                            'family'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Incidental',
                                                        'enum': [
                                                            'incidental'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Supplementary cover',
                                                        'enum': [
                                                            'supplementary'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Supplementary cover + Family extension',
                                                        'enum': [
                                                            'supplementary_family'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:previous_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:language': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'English (AUS)',
                                                        'enum': [
                                                            'aus_english'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Austrian',
                                                        'enum': [
                                                            'austrian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'French (Belgian)',
                                                        'enum': [
                                                            'belgian_french'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Portuguese (Brazil)',
                                                        'enum': [
                                                            'brazil_portuguese'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Bulgarian',
                                                        'enum': [
                                                            'bulgarian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Czech',
                                                        'enum': [
                                                            'czech'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Danish',
                                                        'enum': [
                                                            'danish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Dutch',
                                                        'enum': [
                                                            'dutch'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:n/a',
                                                        'title': 'english',
                                                        'enum': [
                                                            'english'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Finnish',
                                                        'enum': [
                                                            'finnish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Flemish',
                                                        'enum': [
                                                            'flemish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'French',
                                                        'enum': [
                                                            'french'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'German',
                                                        'enum': [
                                                            'german'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Greek',
                                                        'enum': [
                                                            'greek'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Hungarian',
                                                        'enum': [
                                                            'hungarian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Italian',
                                                        'enum': [
                                                            'italian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Japanese',
                                                        'enum': [
                                                            'japanese'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Korean',
                                                        'enum': [
                                                            'korean'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Norwegian',
                                                        'enum': [
                                                            'norwegian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Polish',
                                                        'enum': [
                                                            'polish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Portuguese',
                                                        'enum': [
                                                            'portuguese'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Romanian',
                                                        'enum': [
                                                            'romanian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Russian',
                                                        'enum': [
                                                            'russian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Simplified Chinese',
                                                        'enum': [
                                                            'simpl_chinese'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Slovak',
                                                        'enum': [
                                                            'slovakian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Spanish',
                                                        'enum': [
                                                            'spanish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Swedish',
                                                        'enum': [
                                                            'swedish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'English (Swiss)',
                                                        'enum': [
                                                            'swiss_english'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'French (Swiss)',
                                                        'enum': [
                                                            'swiss_french'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'German (Swiss)',
                                                        'enum': [
                                                            'swiss_german'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Italian (Swiss)',
                                                        'enum': [
                                                            'swiss_italian'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Thai',
                                                        'enum': [
                                                            'thai'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Traditional Chinese',
                                                        'enum': [
                                                            'trad_chinese'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Turkish',
                                                        'enum': [
                                                            'turkish'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'English',
                                                        'enum': [
                                                            'uk_english'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'English (U.S.)',
                                                        'enum': [
                                                            'us_english'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Vietnamese',
                                                        'enum': [
                                                            'vietnamese'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:end_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:marketing_product_number': {
                                                'type': 'string',
                                                'maxLength': 11
                                            },
                                            'contract:currency_code': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'BEF',
                                                        'enum': [
                                                            'bef'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'CHF',
                                                        'enum': [
                                                            'chf'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:n/a',
                                                        'title': 'czk',
                                                        'enum': [
                                                            'czk'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'DEM',
                                                        'enum': [
                                                            'dem'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'EUR',
                                                        'enum': [
                                                            'eur'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'FRF',
                                                        'enum': [
                                                            'frf'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'GBP',
                                                        'enum': [
                                                            'gbp'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:n/a',
                                                        'title': 'huf',
                                                        'enum': [
                                                            'huf'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'ITL',
                                                        'enum': [
                                                            'itl'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'LUF',
                                                        'enum': [
                                                            'luf'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'RUB',
                                                        'enum': [
                                                            'rub'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'RUR',
                                                        'enum': [
                                                            'rur'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'SEK',
                                                        'enum': [
                                                            'sek'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'USD',
                                                        'enum': [
                                                            'usd'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'XEV',
                                                        'enum': [
                                                            'xev'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:proposal_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:signature_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:start_date': {
                                                'format': 'date',
                                                'type': 'string'
                                            },
                                            'contract:product_identifier': {
                                                'type': 'string',
                                                'maxLength': 11
                                            },
                                            'contract:external_number': {
                                                'type': 'string',
                                                'maxLength': 30
                                            },
                                            'contract:nature_label': {
                                                'type': 'string',
                                                'maxLength': 150
                                            },
                                            'contract:product_type': {
                                                'oneOf': [
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Vehicles',
                                                        'enum': [
                                                            'auto'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Health',
                                                        'enum': [
                                                            'health'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Life',
                                                        'enum': [
                                                            'life'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Others',
                                                        'enum': [
                                                            'miscellaneous'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Multi-risks',
                                                        'enum': [
                                                            'multi_risk'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Pension',
                                                        'enum': [
                                                            'pension'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Residential',
                                                        'enum': [
                                                            'property'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Term Insurance',
                                                        'enum': [
                                                            'risk_protection'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Savings',
                                                        'enum': [
                                                            'savings'
                                                        ]
                                                    },
                                                    {
                                                        'description': 'language:en-GB',
                                                        'title': 'Standard',
                                                        'enum': [
                                                            'standard'
                                                        ]
                                                    }
                                                ],
                                                'type': 'string'
                                            },
                                            'contract:product_label': {
                                                'type': 'string',
                                                'maxLength': 60
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};