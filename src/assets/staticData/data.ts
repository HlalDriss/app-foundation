export const resource = {
    'contract:status_date': '2021-07-31',
    'duration:renewal_month': 5,
    'contract:end_validity_date': '9999-99-99',
    'contract:proposition_status': null,
    _links: {
        curies: [
            {
                templated: true,
                name: 'contract',
                href: '/rel/contract/{rel}'
            },
            {
                templated: true,
                name: 'cscaia',
                href: '/rel/cscaia/{rel}'
            }
        ],
        'cscaia:output_documents': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/output_documents'
        },
        'contract:extension_list': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/extension_elements'
        },
        'cscaia:available_documents': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/available_documents'
        },
        collection: {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts'
        },
        type: {
            href: 'http://20.33.40.147:13111/csc/insurance/schemas/contracts/individualContractDocument'
        },
        'contract:membership_list-direct': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/risks'
        },
        'cscaia:states': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/states'
        },
        via: {
            name: 'Launch view activity in AIA',
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/launch_view_aia'
        },
        'contract:role_list': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/party_roles'
        },
        'cscaia:information_requests': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/information_requests'
        },
        'contract:billing_list': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/billings'
        },
        'cscaia:manual_tasks': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/manual_tasks'
        },
        'contract:operation_list-premium': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/premiums'
        },
        'contract:membership_list': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/risks'
        },
        'cscaia:activities': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/activities'
        },
        'cscaia:information_receipts': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/information_receipts'
        },
        'contract:questionnaire_list': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/questionnaires?_inquiry=e_contract_level_qstnnrs_all_types'
        },
        'contract:clause_list': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/clauses'
        },
        'cscaia:operations': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations'
        },
        self: {
            name: 'PC_MLTRSK/PCMR000381 : Mr Test Case CAR WITH TRAILER - In Force - Effective on 05/05/2022',
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu',
            title: 'PC_MLTRSK/PCMR000381 : Mr Test Case CAR WITH TRAILER - In Force - Effective on 05/05/2022'
        },
        up: {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts'
        },
        'cscaia:activity_definitions': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/activity_definitions'
        },
        'cscaia:status_report': {
            href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/status_report'
        }
    },
    _options: {
        links: [
            {
                method: 'GET',
                rel: 'fetch-ci-contract-addtnl-info-rest',
                mediaType: 'application/vnd.hal+json',
                href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu?_inquiry=ci_contract_addtnl_info_rest',
                title: 'Fetch Contract details with inquiry ci_contract_addtnl_info_rest.'
            },
            {
                method: 'GET',
                rel: 'fetch',
                mediaType: 'application/vnd.hal+json',
                href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu',
                title: 'Fetch Contract details'
            },
            {
                method: 'PATCH', // NP add for training, can be removed
                rel: 'fetch',
                mediaType: 'application/vnd.hal+json',
                href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu',
                title: 'Fetch Contract details',
                schema: {
                    properties: {
                        'contract:status_date': true,
                        'duration:renewal_month': true,
                        'contract:number': true,
                        'contract:product_label': true,
                        'contract:start_date': true
                    }
                }
            }
        ],
        title: 'Contract resource interactions',
        properties: {
            'contract:status_date': {
                format: 'date',
                type: 'string'
            },
            'duration:renewal_month': {
                maximum: 99,
                type: 'integer'
            },
            'contract:end_validity_date': {
                format: 'date',
                type: 'string'
            },
            'tax_system:identifier_label': {
                type: 'string',
                maxLength: 200
            },
            'tax_system:option': {
                type: 'string',
                enum: ['epargne_handicap', 'rente_de_survie']
            },
            _embed: {
                oneOf: [
                    {
                        const: 'none'
                    },
                    {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    }
                ]
            },
            'contract:proposition_status': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Deferred',
                        enum: ['deferred']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Not Taken Out',
                        enum: ['not_taken_out']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Rejected',
                        enum: ['rejected']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'To Transfer',
                        enum: ['to_transfer']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Transferred',
                        enum: ['transferred']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Under Review',
                        enum: ['under_review']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Waiting Acceptance',
                        enum: ['waiting_acceptance']
                    }
                ],
                type: 'string'
            },
            'contract:previous_number': {
                type: 'string',
                maxLength: 30
            },
            'contract:number': {
                type: 'string',
                maxLength: 30
            },
            'tax_system:start_date': {
                format: 'date',
                type: 'string'
            },
            'tax_system:residence': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Non-resident',
                        enum: ['abroad']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Monaco',
                        enum: ['monaco']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Resident',
                        enum: ['resident']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Overseas country',
                        enum: ['tom']
                    }
                ],
                type: 'string'
            },
            'contract:end_date': {
                format: 'date',
                type: 'string'
            },
            'contract:marketing_product_number': {
                type: 'string',
                maxLength: 11
            },
            'contract:proposal_number': {
                type: 'string',
                maxLength: 30
            },
            'contract:product_identifier': {
                type: 'string',
                maxLength: 11
            },
            'contract:external_number': {
                type: 'string',
                maxLength: 30
            },
            'duration:value': {
                maximum: 99999,
                type: 'integer'
            },
            'contract:product_label': {
                type: 'string',
                maxLength: 60
            },
            'duration:renewal_day': {
                maximum: 99,
                type: 'integer'
            },
            'tax_system:tax_nature': {
                type: 'string',
                maxLength: 100
            },
            'contract:status_motive': {
                oneOf: [
                    {
                        description: 'language:n/a',
                        title: 'cancelation',
                        enum: ['cancelation']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Claim',
                        enum: ['claim']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Client\u2019s Request',
                        enum: ['client_requested']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Membership Deferral',
                        enum: ['deferral_member']
                    },
                    {
                        description: 'language:n/a',
                        title: 'deferred',
                        enum: ['deferred']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Client deceased',
                        enum: ['deseased']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'End of risk',
                        enum: ['end_of_risk']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'End of risk coverage',
                        enum: ['end_of_risk_coverage']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Error in data entry',
                        enum: ['entry_data_error']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Expired',
                        enum: ['expired']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Input Error',
                        enum: ['input_error']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Insured Refusal',
                        enum: ['insured_rejected']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Membership Refusal',
                        enum: ['issue_rejected']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Awaiting Special Conditions',
                        enum: ['medical_decision']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Missing Deposit (O.N.)',
                        enum: ['missing_deposit']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Missing Deposit',
                        enum: ['missing_deposit_st']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'No Longer Insured',
                        enum: ['no_longer_insured']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'None',
                        enum: ['none']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Not Taken Out',
                        enum: ['not_taken_out']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Official Notice',
                        enum: ['official_notice']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Other',
                        enum: ['other']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Paid-Up',
                        enum: ['paid_up']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Replacement',
                        enum: ['replacement']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Insurer\u2019s Decision',
                        enum: ['requested_by_insurer']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Returned Check',
                        enum: ['returned_check']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Risk increase',
                        enum: ['risk_increase']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Sale/Legal recovery',
                        enum: ['sale_recovery']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Deduction/Surrender/Withdrawal',
                        enum: ['surrender']
                    },
                    {
                        description: 'language:n/a',
                        title: 'suspended',
                        enum: ['suspended']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Transfer',
                        enum: ['transfer']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Non-Payment',
                        enum: ['unpaid']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Unsettled',
                        enum: ['unsettled']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Withdrawal',
                        enum: ['withdrawal']
                    }
                ],
                type: 'string'
            },
            'tax_system:identifier': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Contract: "Farmers"',
                        enum: ['agriculteurs']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Contract: "Article 83"',
                        enum: ['article_83']
                    },
                    {
                        description: 'language:n/a',
                        title: 'bon_capitalisation_dsk',
                        enum: ['bon_capitalisation_dsk']
                    },
                    {
                        description: 'language:n/a',
                        title: 'bon_capitalisation_standard',
                        enum: ['bon_capitalisation_standard']
                    },
                    {
                        description: 'language:n/a',
                        title: 'capitalisation_dsk',
                        enum: ['capitalisation_dsk']
                    },
                    {
                        description: 'language:n/a',
                        title: 'capitalisation_standard',
                        enum: ['capitalisation_standard']
                    },
                    {
                        description: 'language:n/a',
                        title: 'dsk',
                        enum: ['dsk']
                    },
                    {
                        description: 'language:n/a',
                        title: 'fourgous',
                        enum: ['fourgous']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Contract specification Life generation',
                        enum: ['life_generation']
                    },
                    {
                        description: 'language:n/a',
                        title: 'loi_madelin',
                        enum: ['loi_madelin']
                    },
                    {
                        description: 'language:n/a',
                        title: 'loi_madelin_agriculteur',
                        enum: ['loi_madelin_agriculteur']
                    },
                    {
                        description: 'language:n/a',
                        title: 'mono_fond',
                        enum: ['mono_fond']
                    },
                    {
                        description: 'language:n/a',
                        title: 'pea',
                        enum: ['pea']
                    },
                    {
                        description: 'language:n/a',
                        title: 'pep',
                        enum: ['pep']
                    },
                    {
                        description: 'language:n/a',
                        title: 'pep_fourgous',
                        enum: ['pep_fourgous']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Contract: "Retirement Savings Plan"',
                        enum: ['per']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Contract: "Savings plan for group retirement"',
                        enum: ['perco']
                    },
                    {
                        description: 'language:n/a',
                        title: 'perp',
                        enum: ['perp']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Group Risk & Protection',
                        enum: ['prevoyance_collective']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Open Group / Madelin Risk & Protection',
                        enum: ['prevoyance_madelin']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Individual Risk & Protection',
                        enum: ['prevoyance_standard']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Group Health',
                        enum: ['sante_collective']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Open Group / Madelin Health',
                        enum: ['sante_madelin']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Individual Health',
                        enum: ['sante_standard']
                    },
                    {
                        description: 'language:n/a',
                        title: 'unite_de_compte',
                        enum: ['unite_de_compte']
                    }
                ],
                type: 'string'
            },
            'contract:renewal_date': {
                format: 'date',
                type: 'string'
            },
            total_fees: {
                maximum: 999.99,
                type: 'number'
            },
            'contract:status': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Cancelled',
                        enum: ['cancelled']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Formal Request',
                        enum: ['formal_request']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'In Force',
                        enum: ['in_force']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Not issued',
                        enum: ['not_issued']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Not Taken Out',
                        enum: ['not_taken_out']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Not Taken Up',
                        enum: ['not_taken_up']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'On Expiry',
                        enum: ['on_expiry']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Paid-up',
                        enum: ['paid_up']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Proposition',
                        enum: ['proposition']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Proposition Rejected',
                        enum: ['proposition_rejected']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Expired',
                        enum: ['regular_premium']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Replaced',
                        enum: ['replaced']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Surrendered',
                        enum: ['surrender']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Suspended',
                        enum: ['suspended']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Transferred',
                        enum: ['transferred']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Unsettled',
                        enum: ['unsettled']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Waiting Certification',
                        enum: ['waiting_certification']
                    }
                ],
                type: 'string'
            },
            'contract:nature': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Additional',
                        enum: ['additional']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Base',
                        enum: ['base']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Base + Supplementary cover',
                        enum: ['base_supplementary']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Family extension',
                        enum: ['family']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Incidental',
                        enum: ['incidental']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Supplementary cover',
                        enum: ['supplementary']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Supplementary cover + Family extension',
                        enum: ['supplementary_family']
                    }
                ],
                type: 'string'
            },
            'contract:language': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'English (AUS)',
                        enum: ['aus_english']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Austrian',
                        enum: ['austrian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'French (Belgian)',
                        enum: ['belgian_french']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Portuguese (Brazil)',
                        enum: ['brazil_portuguese']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Bulgarian',
                        enum: ['bulgarian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Czech',
                        enum: ['czech']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Danish',
                        enum: ['danish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Dutch',
                        enum: ['dutch']
                    },
                    {
                        description: 'language:n/a',
                        title: 'english',
                        enum: ['english']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Finnish',
                        enum: ['finnish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Flemish',
                        enum: ['flemish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'French',
                        enum: ['french']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'German',
                        enum: ['german']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Greek',
                        enum: ['greek']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Hungarian',
                        enum: ['hungarian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Italian',
                        enum: ['italian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Japanese',
                        enum: ['japanese']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Korean',
                        enum: ['korean']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Norwegian',
                        enum: ['norwegian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Polish',
                        enum: ['polish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Portuguese',
                        enum: ['portuguese']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Romanian',
                        enum: ['romanian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Russian',
                        enum: ['russian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Simplified Chinese',
                        enum: ['simpl_chinese']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Slovak',
                        enum: ['slovakian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Spanish',
                        enum: ['spanish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Swedish',
                        enum: ['swedish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'English (Swiss)',
                        enum: ['swiss_english']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'French (Swiss)',
                        enum: ['swiss_french']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'German (Swiss)',
                        enum: ['swiss_german']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Italian (Swiss)',
                        enum: ['swiss_italian']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Thai',
                        enum: ['thai']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Traditional Chinese',
                        enum: ['trad_chinese']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Turkish',
                        enum: ['turkish']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'English',
                        enum: ['uk_english']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'English (U.S.)',
                        enum: ['us_english']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Vietnamese',
                        enum: ['vietnamese']
                    }
                ],
                type: 'string'
            },
            'tax_system:residence_label': {
                type: 'string',
                maxLength: 150
            },
            'indexation:active': {
                type: 'boolean'
            },
            'loan_account:total_amount_due': {
                maximum: 999999999999.99,
                type: 'number'
            },
            'contract:currency_code': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'BEF',
                        enum: ['bef']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'CHF',
                        enum: ['chf']
                    },
                    {
                        description: 'language:n/a',
                        title: 'czk',
                        enum: ['czk']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'DEM',
                        enum: ['dem']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'EUR',
                        enum: ['eur']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'FRF',
                        enum: ['frf']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'GBP',
                        enum: ['gbp']
                    },
                    {
                        description: 'language:n/a',
                        title: 'huf',
                        enum: ['huf']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'ITL',
                        enum: ['itl']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'LUF',
                        enum: ['luf']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'RUB',
                        enum: ['rub']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'RUR',
                        enum: ['rur']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'SEK',
                        enum: ['sek']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'USD',
                        enum: ['usd']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'XEV',
                        enum: ['xev']
                    }
                ],
                type: 'string'
            },
            'contract:signature_date': {
                format: 'date',
                type: 'string'
            },
            'contract:start_date': {
                format: 'date',
                type: 'string'
            },
            'contract:nature_label': {
                type: 'string',
                maxLength: 150
            },
            'contract:product_type': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Vehicles',
                        enum: ['auto']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Health',
                        enum: ['health']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Life',
                        enum: ['life']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Others',
                        enum: ['miscellaneous']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Multi-risks',
                        enum: ['multi_risk']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Pension',
                        enum: ['pension']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Residential',
                        enum: ['property']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Term Insurance',
                        enum: ['risk_protection']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Savings',
                        enum: ['savings']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Standard',
                        enum: ['standard']
                    }
                ],
                type: 'string'
            }
        }
    },
    'contract:previous_number': '',
    'contract:number': 'PCMR000381',
    'contract:end_date': '9999-99-99',
    'contract:marketing_product_number': 'PC_MLTRSK',
    _embedded: {
        'cscaia:status_report': {
            _links: {
                self: {
                    name: 'status_report',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/status_report',
                    title: 'status_report'
                },
                up: {
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu'
                },
                type: {
                    href: 'http://20.33.40.147:13111/csc/insurance/schemas/contracts/statusReportDocument'
                }
            },
            messages: null,
            consistent: true
        }
    },
    'contract:proposal_number': 'PCMR000381',
    'contract:external_number': null,
    'contract:product_identifier': 'PC_MLTRSK',
    'duration:value': 999,
    'contract:product_label': 'Multi risk multi type risk for individuals',
    'duration:renewal_day': 1,
    'contract:status_motive': 'none',
    'contract:renewal_date': '2022-12-31',
    total_fees: 0,
    'contract:status': 'not_issued',
    'contract:nature': null,
    'contract:language': 'french',
    'contract:currency_code': 'eur',
    'contract:signature_date': '2021-07-30',
    'contract:start_date': '2021-07-31',
    'contract:nature_label': null,
    'contract:product_type': 'multi_risk',
    'contract:amount': '1200300.45',
    'loan_account:total_amount_due': '45.67'
};

export const consistentResource = {
    data: {
        _embedded: {
            'cscaia:status_report': {
                consistent: false
            }
        }
    }
};

export const inConsistentResource = {
    data: {}
};

export const getvaluesArray = [
    {
        schema: 'persons',
        rel: 'search',
        alias: 'Persons'
    },
    {
        schema: 'contracts',
        rel: 'search-get',
        alias: 'Contracts'
    },
    {
        schema: 'demands',
        rel: 'search-value',
        alias: 'Demands'
    }
];

export const oneOfResource = {
    _options: {
        properties: {
            'quote:status': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Not saved',
                        enum: ['draft']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Saved',
                        enum: ['in_force']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'Transferred',
                        enum: ['transferred']
                    }
                ],
                type: 'string'
            },
            'quote:type': {
                oneOf: [
                    {
                        description: 'language:en-GB',
                        title: 'Amendment',
                        enum: ['amendment']
                    },
                    {
                        description: 'language:en-GB',
                        title: 'New policy',
                        enum: ['new']
                    }
                ],
                type: 'string'
            }
        }
    },
    _count: '500+',
    _links: {
        next: {
            href: 'http://20.33.40.95:13211/csc/insurance/quotes?_start=21&_num=20'
        },
        item: [
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'VERMAELEN',
                    'quote_risk:display_id': 'HYUNDAI I20 1.0T-GDI73.6 - 4565555',
                    'quote:identifier': 'QT000081554',
                    'quote:contract_start_date': '2020-12-02',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3680',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081554 - Mister Thomas VERMAELEN - HYUNDAI I20 1.0T-GDI73.6 - 4565555 - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKpK',
                title: 'Quote QT000081554 - Mister Thomas VERMAELEN - HYUNDAI I20 1.0T-GDI73.6 - 4565555 - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': 'test comment',
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'VERMAELEN',
                    'quote_risk:display_id':
                        'Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081553',
                    'quote:contract_start_date': '2020-12-26',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081553 - Mister Thomas VERMAELEN - Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKpA',
                title: 'Quote QT000081553 - Mister Thomas VERMAELEN - Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'VERMEULEN',
                    'quote_risk:display_id': 'AUDI Q7 3.0TDI210 TIPTRONIC - ACAVY',
                    'quote:identifier': 'QT000081552',
                    'quote:contract_start_date': '2021-02-08',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3680',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081552 - Miss Véronique VERMEULEN - AUDI Q7 3.0TDI210 TIPTRONIC - ACAVY - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKp0',
                title: 'Quote QT000081552 - Miss Véronique VERMEULEN - AUDI Q7 3.0TDI210 TIPTRONIC - ACAVY - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'VERMAELEN',
                    'quote_risk:display_id':
                        'Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081550',
                    'quote:contract_start_date': '2020-10-19',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3680',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081550 - Mister Thomas VERMAELEN - Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKoq',
                title: 'Quote QT000081550 - Mister Thomas VERMAELEN - Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'VERMAELEN',
                    'quote_risk:display_id': 'PEUGEOT 3008 1.5BLUEHDI96 EAT8 ALLURE PACK',
                    'quote:identifier': 'QT000081549',
                    'quote:contract_start_date': '2020-12-15',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3680',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081549 - Mister Thomas VERMAELEN - PEUGEOT 3008 1.5BLUEHDI96 EAT8 ALLURE PACK - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKog',
                title: 'Quote QT000081549 - Mister Thomas VERMAELEN - PEUGEOT 3008 1.5BLUEHDI96 EAT8 ALLURE PACK - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Family Insurance',
                    'quote_owner:name': 'TESTDEV',
                    'quote_risk:display_id': 'Single, LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN, BELGIUM',
                    'quote:identifier': 'QT000081543',
                    'quote:contract_start_date': '2020-10-19',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3682',
                    'quote:product_id': 'FVZK01'
                },
                name: 'Quote QT000081543 - Mister Ali5 TESTDEV - Single, LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKoC',
                title: 'Quote QT000081543 - Mister Ali5 TESTDEV - Single, LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'JANXXXXXXX',
                    'quote_risk:display_id': 'BMW SERIE-4 M440I XDRIVE - 4565555',
                    'quote:identifier': 'QT000081542',
                    'quote:contract_start_date': '2021-02-11',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3588',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081542 - Mrs Veexxxxxxx JANXXXXXXX - BMW SERIE-4 M440I XDRIVE - 4565555 - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKo2',
                title: 'Quote QT000081542 - Mrs Veexxxxxxx JANXXXXXXX - BMW SERIE-4 M440I XDRIVE - 4565555 - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'PETE123',
                    'quote_risk:display_id':
                        'Appartment, Owner Occupant, Allée Arthur Masson 11, 1400 NIVELLES, BELGIUM',
                    'quote:identifier': 'QT000081541',
                    'quote:contract_start_date': '2020-12-01',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '1111',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081541 - Mrs Pete123 PETE123 - Appartment, Owner Occupant, Allée Arthur Masson 11, 1400 NIVELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKns',
                title: 'Quote QT000081541 - Mrs Pete123 PETE123 - Appartment, Owner Occupant, Allée Arthur Masson 11, 1400 NIVELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'SHASKIN',
                    'quote_risk:display_id': 'AUDI A3 40 E-TRON 1.4 110 - 4565555',
                    'quote:identifier': 'QT000081540',
                    'quote:contract_start_date': '2021-05-07',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3680',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081540 - Mrs Céu SHASKIN - AUDI A3 40 E-TRON 1.4 110 - 4565555 - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKni',
                title: 'Quote QT000081540 - Mrs Céu SHASKIN - AUDI A3 40 E-TRON 1.4 110 - 4565555 - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'ALABABAVASDFSD',
                    'quote_risk:display_id': 'PEUGEOT BOXER COMBI L1H1 2.2BLUEHDI88 PRO 330',
                    'quote:identifier': 'QT000081536',
                    'quote:contract_start_date': '2021-02-09',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081536 - Mister Ivan ALABABAVASDFSD - PEUGEOT BOXER COMBI L1H1 2.2BLUEHDI88 PRO 330 - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKnY',
                title: 'Quote QT000081536 - Mister Ivan ALABABAVASDFSD - PEUGEOT BOXER COMBI L1H1 2.2BLUEHDI88 PRO 330 - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'ARGT03',
                    'quote_risk:display_id': ' ',
                    'quote:identifier': 'QT000081533',
                    'quote:contract_start_date': '2021-02-10',
                    'quote:status': 'draft',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081533 - Mister Pesho ARGT03 -   - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKnO',
                title: 'Quote QT000081533 - Mister Pesho ARGT03 -   - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Family Insurance',
                    'quote_owner:name': 'TESTDEV',
                    'quote_risk:display_id': 'Single, LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN, BELGIUM',
                    'quote:identifier': 'QT000081529',
                    'quote:contract_start_date': '2020-10-19',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'FVZK01'
                },
                name: 'Quote QT000081529 - Mister Ali2 TESTDEV - Single, LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKnE',
                title: 'Quote QT000081529 - Mister Ali2 TESTDEV - Single, LEO VAN HULLEBUSCHSTRAAT 45, box 11, 2900 SCHOTEN, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'ARGT03',
                    'quote_risk:display_id':
                        'Appartment, Owner Occupant, Ezelsstraat 16, box 6, 1000 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081526',
                    'quote:contract_start_date': '2021-03-09',
                    'quote:status': 'draft',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081526 - Mister Pesho ARGT03 - Appartment, Owner Occupant, Ezelsstraat 16, box 6, 1000 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKn4',
                title: 'Quote QT000081526 - Mister Pesho ARGT03 - Appartment, Owner Occupant, Ezelsstraat 16, box 6, 1000 BRUXELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'TEST',
                    'quote_risk:display_id': 'TYRE RTE - 4354545',
                    'quote:identifier': 'QT000081525',
                    'quote:contract_start_date': '2021-03-24',
                    'quote:status': 'draft',
                    'quote:distributor_id': '3588',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081525 - Mister Dori TEST - TYRE RTE - 4354545 - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKmu',
                title: 'Quote QT000081525 - Mister Dori TEST - TYRE RTE - 4354545 - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:quote_risk_list': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Car Insurance',
                    'quote_owner:name': 'ANNIE',
                    'quote_risk:display_id': null,
                    'quote:identifier': 'QT000081521',
                    'quote:contract_start_date': '2020-10-19',
                    'quote:status': 'draft',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'AVZK01'
                },
                name: 'Quote QT000081521 - Mister Argt14 ANNIE - No Risk - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKmk',
                title: 'Quote QT000081521 - Mister Argt14 ANNIE - No Risk - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': '',
                    'quote_risk:display_id': 'Appartment, Owner Occupant, Street1 5, 1000 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081519',
                    'quote:contract_start_date': '2020-12-21',
                    'quote:status': 'draft',
                    'quote:distributor_id': '1111',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081519 - No Owner - Appartment, Owner Occupant, Street1 5, 1000 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKmQ',
                title: 'Quote QT000081519 - No Owner - Appartment, Owner Occupant, Street1 5, 1000 BRUXELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': '',
                    'quote_risk:display_id': 'Appartment, Owner Occupant,  BELGIUM',
                    'quote:identifier': 'QT000081518',
                    'quote:contract_start_date': '2020-07-31',
                    'quote:status': 'draft',
                    'quote:distributor_id': '1111',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081518 - No Owner - Appartment, Owner Occupant,  BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKmG',
                title: 'Quote QT000081518 - No Owner - Appartment, Owner Occupant,  BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'POSTAL',
                    'quote_risk:display_id': 'Mobile Home, Owner Occupant, Street1 56, box 3, 1000 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081517',
                    'quote:contract_start_date': '2020-10-19',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081517 - Mister Volen POSTAL - Mobile Home, Owner Occupant, Street1 56, box 3, 1000 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKm6',
                title: 'Quote QT000081517 - Mister Volen POSTAL - Mobile Home, Owner Occupant, Street1 56, box 3, 1000 BRUXELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'VERMAELEN',
                    'quote_risk:display_id':
                        'Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081516',
                    'quote:contract_start_date': '2020-10-19',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '3270',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081516 - Mister Thomas VERMAELEN - Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKlw',
                title: 'Quote QT000081516 - Mister Thomas VERMAELEN - Appartment, Owner Occupant, Avenue de Marathon 135/2, 1020 BRUXELLES, BELGIUM - 19/10/2020'
            },
            {
                summary: {
                    'quote:description': null,
                    'quote:type': 'new',
                    'quote:product_name': 'Home Insurance+',
                    'quote_owner:name': 'PET',
                    'quote_risk:display_id':
                        'Appartment, Owner Occupant, Abbaye de la Cambre 11, box 11, 1000 BRUXELLES, BELGIUM',
                    'quote:identifier': 'QT000081514',
                    'quote:contract_start_date': '2021-02-22',
                    'quote:status': 'transferred',
                    'quote:distributor_id': '1111',
                    'quote:product_id': 'VZWP01'
                },
                name: 'Quote QT000081514 - Mrs Pet PET - Appartment, Owner Occupant, Abbaye de la Cambre 11, box 11, 1000 BRUXELLES, BELGIUM - 19/10/2020',
                href: 'http://20.33.40.95:13211/csc/insurance/quotes/ID-mrMxYKlc',
                title: 'Quote QT000081514 - Mrs Pet PET - Appartment, Owner Occupant, Abbaye de la Cambre 11, box 11, 1000 BRUXELLES, BELGIUM - 19/10/2020'
            }
        ],
        self: {
            name: 'Quote',
            href: 'http://20.33.40.95:13211/csc/insurance/quotes',
            title: 'Quote'
        },
        up: {
            href: 'http://20.33.40.95:13211/csc/insurance'
        },
        'cscrel:item-type': {
            href: 'http://20.33.40.95:13211/csc/insurance/schemas/quotes/quoteCollection'
        },
        type: [
            {
                href: 'http://20.33.40.95:13211/csc/insurance/schemas/system/factory'
            },
            {
                href: 'http://20.33.40.95:13211/csc/insurance/schemas/quotes/quoteCollection'
            }
        ],
        first: {
            href: 'http://20.33.40.95:13211/csc/insurance/quotes?_num=20'
        },
        'cscaia:save': {
            href: 'http://20.33.40.95:13211/csc/insurance/**'
        }
    }
};

export const oneOfOptionsExpected = [
    {
        label: 'Not saved',
        value: 'draft'
    },
    {
        label: 'Saved',
        value: 'in_force'
    },
    {
        label: 'Transferred',
        value: 'transferred'
    }
];

export const oneOptionsResponse = {
    _options: {
        properties: {
            _links: {
                properties: {
                    item: {
                        properties: {
                            summary: {
                                type: 'object',
                                properties: {
                                    oneOf: [
                                        {
                                            'person:last_name': {
                                                type: 'string',
                                                maxLength: 70
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

export const contractResponse = {
    _count: '500+',
    _options: {
        links: [
            {
                schema: {
                    properties: {
                        _count: {
                            type: 'integer',
                            minimum: 500
                        },
                        _start: {
                            type: 'integer',
                            minimum: 0
                        },
                        _embed: {
                            oneOf: [
                                'none',
                                {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    }
                                }
                            ]
                        },
                        _date_effect: {
                            format: 'date',
                            type: 'string'
                        },
                        _options: {
                            type: 'boolean'
                        },
                        _num: {
                            type: 'integer',
                            minimum: 20
                        },
                        _sort: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        }
                    }
                },
                method: 'GET',
                rel: 'search-cs-contract-owner-contract-list',
                mediaType: 'application/vnd.hal+json',
                href: 'http://20.33.40.95:13211/csc/insurance/contracts?_inquiry=cs_contract_owner_contract_list',
                title: 'Search for a Contract with inquiry cs_contract_owner_contract_list'
            },
            {
                schema: {
                    properties: {
                        'organization:client_number': {
                            type: 'string',
                            maxLength: 18
                        },
                        _count: {
                            type: 'integer',
                            minimum: 500
                        },
                        _start: {
                            type: 'integer',
                            minimum: 0
                        },
                        _embed: {
                            oneOf: [
                                'none',
                                {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    }
                                }
                            ]
                        },
                        _date_effect: {
                            format: 'date',
                            type: 'string'
                        },
                        'person:client_number': {
                            type: 'string',
                            maxLength: 18
                        },
                        'contract:status': {
                            oneOf: [
                                {
                                    description: 'language:en-GB',
                                    title: 'Cancelled',
                                    enum: ['cancelled']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Formal Request',
                                    enum: ['formal_request']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'In Force',
                                    enum: ['in_force']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Not issued',
                                    enum: ['not_issued']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Not Taken Out',
                                    enum: ['not_taken_out']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Not Taken Up',
                                    enum: ['not_taken_up']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'On Expiry',
                                    enum: ['on_expiry']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Paid-up',
                                    enum: ['paid_up']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Proposition',
                                    enum: ['proposition']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Proposition Rejected',
                                    enum: ['proposition_rejected']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Expired',
                                    enum: ['regular_premium']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Replaced',
                                    enum: ['replaced']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Surrendered',
                                    enum: ['surrender']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Suspended',
                                    enum: ['suspended']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Transferred',
                                    enum: ['transferred']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Unsettled',
                                    enum: ['unsettled']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Waiting Certification',
                                    enum: ['waiting_certification']
                                }
                            ],
                            type: 'string'
                        },
                        _options: {
                            type: 'boolean'
                        },
                        _num: {
                            type: 'integer',
                            minimum: 20
                        },
                        'contract:number': {
                            type: 'string',
                            maxLength: 30
                        },
                        _sort: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        }
                    }
                },
                method: 'GET',
                rel: 'search-s-contract-number',
                mediaType: 'application/vnd.hal+json',
                href: 'http://20.33.40.95:13211/csc/insurance/contracts?_inquiry=s_contract_number',
                title: 'Search for a Contract with inquiry s_contract_number'
            },
            {
                schema: {
                    properties: {
                        'organization_detail:branch_number': {
                            type: 'string',
                            maxLength: 10
                        },
                        contract_start_date_min: {
                            format: 'date',
                            type: 'string'
                        },
                        'organization:client_number': {
                            type: 'string',
                            maxLength: 18
                        },
                        _embed: {
                            oneOf: [
                                'none',
                                {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    }
                                }
                            ]
                        },
                        'organization:unique_identifier': {
                            type: 'string',
                            maxLength: 18
                        },
                        _date_effect: {
                            format: 'date',
                            type: 'string'
                        },
                        'moped:model': {
                            type: 'string',
                            maxLength: 30
                        },
                        'trailer:model': {
                            type: 'string',
                            maxLength: 30
                        },
                        'organization_detail:organization_number': {
                            type: 'string',
                            maxLength: 20
                        },
                        'van:registration_number': {
                            type: 'string',
                            maxLength: 12
                        },
                        _sort: {
                            type: 'array',
                            items: {
                                type: 'string',
                                enum: [
                                    'distributor_detail:unique_identifier',
                                    '-distributor_detail:unique_identifier',
                                    'contract:start_date',
                                    '-contract:start_date'
                                ]
                            }
                        },
                        contract_start_date_max: {
                            format: 'date',
                            type: 'string'
                        },
                        'person:birth_date': {
                            format: 'date',
                            type: 'string'
                        },
                        'moped:registration_number': {
                            type: 'string',
                            maxLength: 12
                        },
                        'distributor_detail:unique_identifier': {
                            type: 'string',
                            maxLength: 10
                        },
                        'trailer:make': {
                            type: 'string',
                            maxLength: 30
                        },
                        'contract:status': {
                            oneOf: [
                                {
                                    description: 'language:en-GB',
                                    title: 'Cancelled',
                                    enum: ['cancelled']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Formal Request',
                                    enum: ['formal_request']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'In Force',
                                    enum: ['in_force']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Not issued',
                                    enum: ['not_issued']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Not Taken Out',
                                    enum: ['not_taken_out']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Not Taken Up',
                                    enum: ['not_taken_up']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'On Expiry',
                                    enum: ['on_expiry']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Paid-up',
                                    enum: ['paid_up']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Proposition',
                                    enum: ['proposition']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Proposition Rejected',
                                    enum: ['proposition_rejected']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Expired',
                                    enum: ['regular_premium']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Replaced',
                                    enum: ['replaced']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Surrendered',
                                    enum: ['surrender']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Suspended',
                                    enum: ['suspended']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Transferred',
                                    enum: ['transferred']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Unsettled',
                                    enum: ['unsettled']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Waiting Certification',
                                    enum: ['waiting_certification']
                                }
                            ],
                            type: 'string'
                        },
                        organization_detail_v_a_t_number_be: {
                            type: 'string',
                            maxLength: 16
                        },
                        'motorcycle:make': {
                            type: 'string',
                            maxLength: 30
                        },
                        'motorcycle:registration_number': {
                            type: 'string',
                            maxLength: 12
                        },
                        'automobile:make': {
                            type: 'string',
                            maxLength: 30
                        },
                        'postal_address:street_number': {
                            type: 'string',
                            maxLength: 15
                        },
                        'organization_detail:b_c_e_number': {
                            type: 'string',
                            maxLength: 10
                        },
                        'person:last_name': {
                            type: 'string',
                            maxLength: 70
                        },
                        'postal_address:city_name': {
                            type: 'string',
                            maxLength: 70
                        },
                        _start: {
                            type: 'integer',
                            minimum: 0
                        },
                        'van:make': {
                            type: 'string',
                            maxLength: 30
                        },
                        'moped:make': {
                            type: 'string',
                            maxLength: 30
                        },
                        'automobile:registration_number': {
                            type: 'string',
                            maxLength: 12
                        },
                        'motorcycle:model': {
                            type: 'string',
                            maxLength: 30
                        },
                        _options: {
                            type: 'boolean'
                        },
                        'contract:insurance_type': {
                            oneOf: [
                                {
                                    description: 'language:en-GB',
                                    title: 'Group',
                                    enum: ['group']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Individual',
                                    enum: ['individual']
                                },
                                {
                                    description: 'language:en-GB',
                                    title: 'Open Group',
                                    enum: ['open_group']
                                }
                            ],
                            type: 'string'
                        },
                        'contract:number': {
                            type: 'string',
                            maxLength: 30
                        },
                        _count: {
                            type: 'integer',
                            minimum: 500
                        },
                        'organization_detail:n_o_s_s_number': {
                            type: 'string',
                            maxLength: 12
                        },
                        'automobile:model': {
                            type: 'string',
                            maxLength: 30
                        },
                        'organization:postal_code': {
                            type: 'string',
                            maxLength: 10
                        },
                        'contract:product_identifier': {
                            type: 'string',
                            maxLength: 11
                        },
                        'postal_address:postal_code': {
                            type: 'string',
                            maxLength: 10
                        },
                        'organization_detail:registration_number': {
                            type: 'string',
                            maxLength: 20
                        },
                        'distributor_detail:identifier': {
                            type: 'string',
                            maxLength: 10
                        },
                        'van:model': {
                            type: 'string',
                            maxLength: 30
                        },
                        'organization_detail:numero_s_i_r_e_n': {
                            type: 'string',
                            maxLength: 9
                        },
                        'postal_address:street_name': {
                            type: 'string',
                            maxLength: 160
                        },
                        _num: {
                            type: 'integer',
                            minimum: 20
                        },
                        'organization:legal_name': {
                            type: 'string',
                            maxLength: 70
                        },
                        'person:first_name': {
                            type: 'string',
                            maxLength: 40
                        },
                        'person:first_name_normalized': {
                            type: 'string',
                            maxLength: 40
                        },
                        'organization:referential': {
                            type: 'boolean'
                        },
                        'person:client_number': {
                            type: 'string',
                            maxLength: 18
                        },
                        'postal_address:box_number': {
                            type: 'string',
                            maxLength: 8
                        },
                        'contract:offer_number': {
                            type: 'string',
                            maxLength: 30
                        },
                        organization_detail_v_a_t_number: {
                            type: 'string',
                            maxLength: 16
                        },
                        'trailer:registration_number': {
                            type: 'string',
                            maxLength: 12
                        },
                        'organization:trade_name': {
                            type: 'string',
                            maxLength: 70
                        }
                    }
                },
                method: 'GET',
                rel: 'search',
                mediaType: 'application/vnd.hal+json',
                href: 'http://20.33.40.95:13211/csc/insurance/contracts',
                title: 'Search for a Contract  by criteria'
            }
        ],
        title: 'Contract collection interactions',
        properties: {
            oneOf: [
                {
                    _count: {
                        pattern: '^\\\\[0-9]+\\\\+$',
                        type: 'string'
                    }
                },
                {
                    _count: {
                        type: 'integer'
                    }
                }
            ],
            _links: {
                type: 'object',
                properties: {
                    item: {
                        type: 'object',
                        properties: {
                            summary: {
                                type: 'object',
                                properties: {
                                    oneOf: [
                                        {
                                            'person:last_name': {
                                                type: 'string',
                                                maxLength: 70
                                            },
                                            'distributor_detail:identifier': {
                                                type: 'string',
                                                maxLength: 10
                                            },
                                            'contract:renewal_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:proposition_status': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Deferred',
                                                        enum: ['deferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Rejected',
                                                        enum: ['rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'To Transfer',
                                                        enum: ['to_transfer']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transferred',
                                                        enum: ['transferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Under Review',
                                                        enum: ['under_review']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Waiting Acceptance',
                                                        enum: ['waiting_acceptance']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'distributor_detail:unique_identifier': {
                                                type: 'string',
                                                maxLength: 10
                                            },
                                            'contract:status': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Cancelled',
                                                        enum: ['cancelled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Formal Request',
                                                        enum: ['formal_request']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'In Force',
                                                        enum: ['in_force']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not issued',
                                                        enum: ['not_issued']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Up',
                                                        enum: ['not_taken_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'On Expiry',
                                                        enum: ['on_expiry']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Paid-up',
                                                        enum: ['paid_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Proposition',
                                                        enum: ['proposition']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Proposition Rejected',
                                                        enum: ['proposition_rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Expired',
                                                        enum: ['regular_premium']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Replaced',
                                                        enum: ['replaced']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Surrendered',
                                                        enum: ['surrender']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Suspended',
                                                        enum: ['suspended']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transferred',
                                                        enum: ['transferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Unsettled',
                                                        enum: ['unsettled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Waiting Certification',
                                                        enum: ['waiting_certification']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:proposition_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'organization:legal_name': {
                                                type: 'string',
                                                maxLength: 70
                                            },
                                            'person:first_name': {
                                                type: 'string',
                                                maxLength: 40
                                            },
                                            'contract:offer_type': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Amendment',
                                                        enum: ['amendment']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'New business',
                                                        enum: ['new_business']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'insured_risk:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'contract:marketing_product_number': {
                                                type: 'string',
                                                maxLength: 11
                                            },
                                            'contract:proposal_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:offer_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'organization:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'person:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'membership:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'contract:start_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:product_identifier': {
                                                type: 'string',
                                                maxLength: 11
                                            },
                                            'contract:product_type': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Vehicles',
                                                        enum: ['auto']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Health',
                                                        enum: ['health']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Life',
                                                        enum: ['life']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Others',
                                                        enum: ['miscellaneous']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Multi-risks',
                                                        enum: ['multi_risk']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Pension',
                                                        enum: ['pension']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Residential',
                                                        enum: ['property']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Term Insurance',
                                                        enum: ['risk_protection']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Savings',
                                                        enum: ['savings']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Standard',
                                                        enum: ['standard']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:product_label': {
                                                type: 'string',
                                                maxLength: 60
                                            }
                                        },
                                        {
                                            'person:last_name': {
                                                type: 'string',
                                                maxLength: 70
                                            },
                                            'distributor_detail:identifier': {
                                                type: 'string',
                                                maxLength: 10
                                            },
                                            'contract:renewal_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:proposition_status': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Deferred',
                                                        enum: ['deferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Rejected',
                                                        enum: ['rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'To Transfer',
                                                        enum: ['to_transfer']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transferred',
                                                        enum: ['transferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Under Review',
                                                        enum: ['under_review']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Waiting Acceptance',
                                                        enum: ['waiting_acceptance']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'distributor_detail:unique_identifier': {
                                                type: 'string',
                                                maxLength: 10
                                            },
                                            'contract:status': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Cancelled',
                                                        enum: ['cancelled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Formal Request',
                                                        enum: ['formal_request']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'In Force',
                                                        enum: ['in_force']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not issued',
                                                        enum: ['not_issued']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Up',
                                                        enum: ['not_taken_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'On Expiry',
                                                        enum: ['on_expiry']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Paid-up',
                                                        enum: ['paid_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Proposition',
                                                        enum: ['proposition']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Proposition Rejected',
                                                        enum: ['proposition_rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Expired',
                                                        enum: ['regular_premium']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Replaced',
                                                        enum: ['replaced']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Surrendered',
                                                        enum: ['surrender']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Suspended',
                                                        enum: ['suspended']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transferred',
                                                        enum: ['transferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Unsettled',
                                                        enum: ['unsettled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Waiting Certification',
                                                        enum: ['waiting_certification']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:proposition_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'organization:legal_name': {
                                                type: 'string',
                                                maxLength: 70
                                            },
                                            'person:first_name': {
                                                type: 'string',
                                                maxLength: 40
                                            },
                                            'contract:offer_type': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Amendment',
                                                        enum: ['amendment']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'New business',
                                                        enum: ['new_business']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'insured_risk:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'contract:marketing_product_number': {
                                                type: 'string',
                                                maxLength: 11
                                            },
                                            'contract:proposal_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:offer_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'organization:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'person:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'membership:display_id': {
                                                type: 'string',
                                                maxLength: 75
                                            },
                                            'contract:start_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:product_identifier': {
                                                type: 'string',
                                                maxLength: 11
                                            },
                                            'contract:product_type': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Vehicles',
                                                        enum: ['auto']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Health',
                                                        enum: ['health']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Life',
                                                        enum: ['life']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Others',
                                                        enum: ['miscellaneous']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Multi-risks',
                                                        enum: ['multi_risk']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Pension',
                                                        enum: ['pension']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Residential',
                                                        enum: ['property']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Term Insurance',
                                                        enum: ['risk_protection']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Savings',
                                                        enum: ['savings']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Standard',
                                                        enum: ['standard']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:product_label': {
                                                type: 'string',
                                                maxLength: 60
                                            }
                                        },
                                        {
                                            'contract:status_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:status_motive': {
                                                oneOf: [
                                                    {
                                                        description: 'language:n/a',
                                                        title: 'cancelation',
                                                        enum: ['cancelation']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Claim',
                                                        enum: ['claim']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Client\u2019s Request',
                                                        enum: ['client_requested']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Membership Deferral',
                                                        enum: ['deferral_member']
                                                    },
                                                    {
                                                        description: 'language:n/a',
                                                        title: 'deferred',
                                                        enum: ['deferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Client deceased',
                                                        enum: ['deseased']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'End of risk',
                                                        enum: ['end_of_risk']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'End of risk coverage',
                                                        enum: ['end_of_risk_coverage']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Error in data entry',
                                                        enum: ['entry_data_error']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Expired',
                                                        enum: ['expired']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Input Error',
                                                        enum: ['input_error']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Insured Refusal',
                                                        enum: ['insured_rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Membership Refusal',
                                                        enum: ['issue_rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Awaiting Special Conditions',
                                                        enum: ['medical_decision']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Missing Deposit (O.N.)',
                                                        enum: ['missing_deposit']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Missing Deposit',
                                                        enum: ['missing_deposit_st']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'No Longer Insured',
                                                        enum: ['no_longer_insured']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'None',
                                                        enum: ['none']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Official Notice',
                                                        enum: ['official_notice']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Other',
                                                        enum: ['other']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Paid-Up',
                                                        enum: ['paid_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Replacement',
                                                        enum: ['replacement']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Insurer\u2019s Decision',
                                                        enum: ['requested_by_insurer']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Returned Check',
                                                        enum: ['returned_check']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Risk increase',
                                                        enum: ['risk_increase']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Sale/Legal recovery',
                                                        enum: ['sale_recovery']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Deduction/Surrender/Withdrawal',
                                                        enum: ['surrender']
                                                    },
                                                    {
                                                        description: 'language:n/a',
                                                        title: 'suspended',
                                                        enum: ['suspended']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transfer',
                                                        enum: ['transfer']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Non-Payment',
                                                        enum: ['unpaid']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Unsettled',
                                                        enum: ['unsettled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Withdrawal',
                                                        enum: ['withdrawal']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Better tariff at competitor',
                                                        enum: ['arg_better_tariff_competitor']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Disappearance of insured risk - Company car',
                                                        enum: ['arg_disappear_risk_company_car']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Disappearance of insured risk - Deceased',
                                                        enum: ['arg_disappear_risk_deceased']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Disappearance of insured risk - Moved',
                                                        enum: ['arg_disappear_risk_moved']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Disappearance of insured risk - Termination lease/Sale risk',
                                                        enum: ['arg_disappear_risk_sale']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Disappearance of insured risk - Sold car',
                                                        enum: ['arg_disappear_risk_sold_car']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Dissatisfied with claim management',
                                                        enum: ['arg_dissatisfied_claim']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Dissatisfied with product',
                                                        enum: ['arg_dissatisfied_product']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to intentionally incorrect/withheld of information',
                                                        enum: ['arg_insr_int_incorrect_info']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to invalid inspection certificate',
                                                        enum: ['arg_insr_invalid_certificate']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to unintentionally incorrect/withheld of information',
                                                        enum: ['arg_insr_unint_incorrect_info']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer - suspension of the agreement',
                                                        enum: ['arg_insurer_agreement_suspend']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to bankruptcy',
                                                        enum: ['arg_insurer_bankruptcy']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to change of the insurance conditions',
                                                        enum: ['arg_insurer_change_condition']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to claims',
                                                        enum: ['arg_insurer_claims']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to decease',
                                                        enum: ['arg_insurer_decease']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to increased risk',
                                                        enum: ['arg_insurer_increased_risk']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer due to non-payment',
                                                        enum: ['arg_insurer_non_payment']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By insurer at renewal',
                                                        enum: ['arg_insurer_renewal']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Home insurance linked to a mortgage at another mortgage company',
                                                        enum: ['arg_mortrage_another_company']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - Other (fill in motivation manually)',
                                                        enum: ['arg_other']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'By client - New risk falls outside acceptance criteria',
                                                        enum: ['arg_risk_outside_criteria']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:end_validity_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:renewal_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:proposition_status': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Deferred',
                                                        enum: ['deferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Rejected',
                                                        enum: ['rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'To Transfer',
                                                        enum: ['to_transfer']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transferred',
                                                        enum: ['transferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Under Review',
                                                        enum: ['under_review']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Waiting Acceptance',
                                                        enum: ['waiting_acceptance']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:status': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Cancelled',
                                                        enum: ['cancelled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Formal Request',
                                                        enum: ['formal_request']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'In Force',
                                                        enum: ['in_force']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not issued',
                                                        enum: ['not_issued']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Out',
                                                        enum: ['not_taken_out']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Not Taken Up',
                                                        enum: ['not_taken_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'On Expiry',
                                                        enum: ['on_expiry']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Paid-up',
                                                        enum: ['paid_up']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Proposition',
                                                        enum: ['proposition']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Proposition Rejected',
                                                        enum: ['proposition_rejected']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Expired',
                                                        enum: ['regular_premium']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Replaced',
                                                        enum: ['replaced']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Surrendered',
                                                        enum: ['surrender']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Suspended',
                                                        enum: ['suspended']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Transferred',
                                                        enum: ['transferred']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Unsettled',
                                                        enum: ['unsettled']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Waiting Certification',
                                                        enum: ['waiting_certification']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:nature': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Additional',
                                                        enum: ['additional']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Base',
                                                        enum: ['base']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Base + Supplementary cover',
                                                        enum: ['base_supplementary']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Family extension',
                                                        enum: ['family']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Incidental',
                                                        enum: ['incidental']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Supplementary cover',
                                                        enum: ['supplementary']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Supplementary cover + Family extension',
                                                        enum: ['supplementary_family']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:previous_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:language': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'English (AUS)',
                                                        enum: ['aus_english']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Austrian',
                                                        enum: ['austrian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'French (Belgian)',
                                                        enum: ['belgian_french']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Portuguese (Brazil)',
                                                        enum: ['brazil_portuguese']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Bulgarian',
                                                        enum: ['bulgarian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Czech',
                                                        enum: ['czech']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Danish',
                                                        enum: ['danish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Dutch',
                                                        enum: ['dutch']
                                                    },
                                                    {
                                                        description: 'language:n/a',
                                                        title: 'english',
                                                        enum: ['english']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Finnish',
                                                        enum: ['finnish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Flemish',
                                                        enum: ['flemish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'French',
                                                        enum: ['french']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'German',
                                                        enum: ['german']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Greek',
                                                        enum: ['greek']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Hungarian',
                                                        enum: ['hungarian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Italian',
                                                        enum: ['italian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Japanese',
                                                        enum: ['japanese']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Korean',
                                                        enum: ['korean']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Norwegian',
                                                        enum: ['norwegian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Polish',
                                                        enum: ['polish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Portuguese',
                                                        enum: ['portuguese']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Romanian',
                                                        enum: ['romanian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Russian',
                                                        enum: ['russian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Simplified Chinese',
                                                        enum: ['simpl_chinese']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Slovak',
                                                        enum: ['slovakian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Spanish',
                                                        enum: ['spanish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Swedish',
                                                        enum: ['swedish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'English (Swiss)',
                                                        enum: ['swiss_english']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'French (Swiss)',
                                                        enum: ['swiss_french']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'German (Swiss)',
                                                        enum: ['swiss_german']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Italian (Swiss)',
                                                        enum: ['swiss_italian']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Thai',
                                                        enum: ['thai']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Traditional Chinese',
                                                        enum: ['trad_chinese']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Turkish',
                                                        enum: ['turkish']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'English',
                                                        enum: ['uk_english']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'English (U.S.)',
                                                        enum: ['us_english']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Vietnamese',
                                                        enum: ['vietnamese']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:end_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:marketing_product_number': {
                                                type: 'string',
                                                maxLength: 11
                                            },
                                            'contract:currency_code': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'BEF',
                                                        enum: ['bef']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'CHF',
                                                        enum: ['chf']
                                                    },
                                                    {
                                                        description: 'language:n/a',
                                                        title: 'czk',
                                                        enum: ['czk']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'DEM',
                                                        enum: ['dem']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'EUR',
                                                        enum: ['eur']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'FRF',
                                                        enum: ['frf']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'GBP',
                                                        enum: ['gbp']
                                                    },
                                                    {
                                                        description: 'language:n/a',
                                                        title: 'huf',
                                                        enum: ['huf']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'ITL',
                                                        enum: ['itl']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'LUF',
                                                        enum: ['luf']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'RUB',
                                                        enum: ['rub']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'RUR',
                                                        enum: ['rur']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'SEK',
                                                        enum: ['sek']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'USD',
                                                        enum: ['usd']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'XEV',
                                                        enum: ['xev']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:proposal_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:signature_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:start_date': {
                                                format: 'date',
                                                type: 'string'
                                            },
                                            'contract:product_identifier': {
                                                type: 'string',
                                                maxLength: 11
                                            },
                                            'contract:external_number': {
                                                type: 'string',
                                                maxLength: 30
                                            },
                                            'contract:nature_label': {
                                                type: 'string',
                                                maxLength: 150
                                            },
                                            'contract:product_type': {
                                                oneOf: [
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Vehicles',
                                                        enum: ['auto']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Health',
                                                        enum: ['health']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Life',
                                                        enum: ['life']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Others',
                                                        enum: ['miscellaneous']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Multi-risks',
                                                        enum: ['multi_risk']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Pension',
                                                        enum: ['pension']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Residential',
                                                        enum: ['property']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Term Insurance',
                                                        enum: ['risk_protection']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Savings',
                                                        enum: ['savings']
                                                    },
                                                    {
                                                        description: 'language:en-GB',
                                                        title: 'Standard',
                                                        enum: ['standard']
                                                    }
                                                ],
                                                type: 'string'
                                            },
                                            'contract:product_label': {
                                                type: 'string',
                                                maxLength: 60
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

export const contractOperations = {
    data: {
        _count: 5,
        _links: {
            item: [
                {
                    summary: null,
                    name: 'create_claim_declaration',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations/create_claim_declaration',
                    title: 'create_claim_declaration'
                },
                {
                    summary: null,
                    name: 'change_status',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations/change_status',
                    title: 'change_status'
                },
                {
                    summary: null,
                    name: 'create_amendment',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations/create_amendment',
                    title: 'create_amendment'
                },
                {
                    summary: null,
                    name: 'update_scheduled_payment',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations/update_scheduled_payment',
                    title: 'update_scheduled_payment'
                },
                {
                    summary: null,
                    name: 'request_scheduled_payment',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations/request_scheduled_payment',
                    title: 'request_scheduled_payment'
                }
            ],
            self: {
                name: 'Opération',
                href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations',
                title: 'Opération'
            },
            up: {
                href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu'
            },
            'cscrel:item-type': {
                href: 'http://20.33.40.147:13111/csc/insurance/schemas/CH-XzE0ODA0-HC/operationDocument'
            },
            type: [
                {
                    href: 'http://20.33.40.147:13111/csc/insurance/schemas/system/factory'
                },
                {
                    href: 'http://20.33.40.147:13111/csc/insurance/schemas/contracts/operationCollection'
                }
            ],
            first: {
                href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations?_num=20'
            }
        },
        _options: {
            links: [
                {
                    schema: {
                        properties: {
                            _count: {
                                type: 'integer',
                                minimum: 500
                            },
                            _start: {
                                type: 'integer',
                                minimum: 0
                            },
                            _embed: {
                                oneOf: [{ const: 'none' }, { type: 'array', items: { type: 'string' } }]
                            },
                            _options: {
                                type: 'boolean'
                            },
                            _num: {
                                type: 'integer',
                                minimum: 20
                            },
                            _sort: {
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    },
                    method: 'GET',
                    rel: 'search',
                    mediaType: 'application/vnd.hal+json',
                    href: 'http://20.33.40.147:13111/csc/insurance/contracts/ID-W4Fb6FAqu/operations',
                    title: 'Rechercher Opération  par des critères'
                }
            ],
            title: 'Opération interactions de collections'
        }
    }
};

export const listPropertiesResponse = {
    _options: {
        properties: {
            _links: {
                items: {
                    items: {
                        items: {
                            oneOf: [
                                {
                                    description: 'language:en-GB',
                                    title: 'Deferred',
                                    enum: ['deferred']
                                }
                            ]
                        }
                    }
                }
            }
        }
    }
};

export const optionsResponse = {
    _options: {
        properties: {
            _links: {
                properties: {
                    item: {
                        properties: {
                            summary: {
                                type: 'object',
                                properties: {
                                    oneOf: [
                                        {
                                            description: 'language:en-GB',
                                            title: 'Vehicles',
                                            enum: ['auto']
                                        },
                                        {
                                            description: 'language:en-GB',
                                            title: 'Health',
                                            enum: ['health']
                                        },
                                        {
                                            description: 'language:en-GB',
                                            title: 'Life',
                                            enum: ['life'],
                                            _links: {
                                                oneOf: [
                                                    {
                                                        label: 'life',
                                                        value: 'draft',
                                                        enum: ['life']
                                                    }
                                                ]
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
