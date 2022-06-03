export {}
// import { appConfig } from 'configs/appConfig';

// const userRequestHref = `${appConfig.apiHostURL}references_wm`;
// export const mockUserReferenceResponse: any = {
//     [`${userRequestHref}/users?user:user_name=vatsekov`]: {
//         _count: 1,
//         _links: {
//             next: {
//                 href: `${userRequestHref}/requests?_start=21&_num=20&request:status=pending&request:user_id=VATSEKOV`
//             },
//             item: [
//                 {
//                     summary: {
//                         'request:status': 'pending',
//                         'request:user_id': 'VATSEKOV',
//                         'request:priority_id': 'medium',
//                         'request:title': null,
//                         'request:party_label': null,
//                         'request:due_date': '2021-12-03'
//                     },
//                     name: '43 : ',
//                     href: `${userRequestHref}/requests/ID-AfUeuDu`,
//                     title: '43 : '
//                 }
//             ],
//             last: {
//                 href: `${userRequestHref}/requests?_start=41&_num=20&request:status=pending&request:user_id=VATSEKOV`
//             },
//             self: {
//                 name: 'Request',
//                 href: `${userRequestHref}/requests`,
//                 title: 'Request'
//             },
//             up: { href: `${userRequestHref}` },
//             'cscrel:item-type': {
//                 href: `${appConfig.apiHostURL}schemas/references_wm/requestDocument`
//             },
//             type: [
//                 { href: `${appConfig.apiHostURL}schemas/system/factory` },
//                 { href: `${appConfig.apiHostURL}schemas/references_wm/requestCollection` }
//             ],
//             first: {
//                 href: `${userRequestHref}/requests?_num=20&request:status=pending&request:user_id=VATSEKOV`
//             }
//         },
//         _options: {
//             links: [
//                 {
//                     schema: {
//                         properties: {
//                             _count: { type: 'integer', minimum: 500 },
//                             _status_report: { type: 'boolean' },
//                             _start: { type: 'integer', minimum: 0 },
//                             _embed: { oneOf: [{ const: 'none' }, { type: 'array', items: { type: 'string' } }] },
//                             _date_effect: { format: 'date', type: 'string' },
//                             _options: { type: 'string' },
//                             _num: { type: 'integer', minimum: 20 },
//                             _sort: { type: 'array', items: { type: 'string' } }
//                         }
//                     },
//                     method: 'GET',
//                     rel: 'search-watched',
//                     mediaType: 'application/vnd.hal+json',
//                     href: `${userRequestHref}/requests?_inquiry=watched`,
//                     title: 'Search for a Request with inquiry watched'
//                 },
//                 {
//                     schema: {
//                         properties: {
//                             'request:priority_id': {
//                                 oneOf: [
//                                     { title: 'Very Low', enum: ['very_low'] },
//                                     { title: 'Low', enum: ['low'] },
//                                     { title: 'Medium', enum: ['medium'] },
//                                     { title: 'High', enum: ['high'] },
//                                     { title: 'Very High', enum: ['very_high'] }
//                                 ],
//                                 type: 'string'
//                             },
//                             _start: { type: 'integer', minimum: 0 },
//                             _embed: { oneOf: [{ const: 'none' }, { type: 'array', items: { type: 'string' } }] },
//                             _date_effect: { format: 'date', type: 'string' },
//                             _options: { type: 'string' },
//                             _sort: {
//                                 type: 'array',
//                                 items: {
//                                     type: 'string',
//                                     enum: [
//                                         'request:identifier',
//                                         '-request:identifier',
//                                         'request:user_id',
//                                         '-request:user_id',
//                                         'request:title',
//                                         '-request:title',
//                                         'request:priority_id',
//                                         '-request:priority_id',
//                                         'request:due_date',
//                                         '-request:due_date',
//                                         'request:create_date',
//                                         '-request:create_date',
//                                         'request:create_time',
//                                         '-request:create_time',
//                                         'request:reminder_date',
//                                         '-request:reminder_date'
//                                     ]
//                                 }
//                             },
//                             request_reminder_date_max: { format: 'date', type: 'string' },
//                             'request:user_id': { type: 'string', maxLength: 30 },
//                             request_create_time_min: { format: 'time', type: 'string' },
//                             _count: { type: 'integer', minimum: 500 },
//                             'request:title': { type: 'string', maxLength: 100 },
//                             'request:parent_request': { format: 'uri', type: 'string' },
//                             request_due_date_max: { format: 'date', type: 'string' },
//                             request_create_date_min: { format: 'date', type: 'string' },
//                             'request:origin': {
//                                 oneOf: [
//                                     { description: 'language:en-GB', title: 'Email', enum: ['email'] },
//                                     { description: 'language:en-GB', title: 'Letter', enum: ['letter'] },
//                                     { description: 'language:en-GB', title: 'Phone', enum: ['phone'] }
//                                 ],
//                                 type: 'string'
//                             },
//                             'request:workqueue': { format: 'uri', type: 'string' },
//                             'request:type': { format: 'uri', type: 'string' },
//                             'request:status': {
//                                 oneOf: [
//                                     { description: 'language:en-GB', title: 'Cancelled', enum: ['cancelled'] },
//                                     { description: 'language:en-GB', title: 'Closed', enum: ['closed'] },
//                                     { description: 'language:en-GB', title: 'Pending', enum: ['pending'] }
//                                 ],
//                                 type: 'string'
//                             },
//                             _status_report: { type: 'boolean' },
//                             request_create_time_max: { format: 'time', type: 'string' },
//                             request_create_date_max: { format: 'date', type: 'string' },
//                             request_due_date_min: { format: 'date', type: 'string' },
//                             _num: { type: 'integer', minimum: 20 },
//                             'request:identifier': { type: 'string', maxLength: 10 },
//                             request_reminder_date_min: { format: 'date', type: 'string' }
//                         }
//                     },
//                     method: 'GET',
//                     rel: 'search',
//                     mediaType: 'application/vnd.hal+json',
//                     href: `${userRequestHref}/requests`,
//                     title: 'Search for a Request  by criteria'
//                 }
//             ],
//             title: 'Request collection interactions',
//             properties: {
//                 oneOf: [{ _count: { pattern: '^\\\\[0-9]+\\\\+$', type: 'string' } }, { _count: { type: 'integer' } }],
//                 _links: {
//                     type: 'object',
//                     properties: {
//                         item: {
//                             type: 'object',
//                             properties: {
//                                 summary: {
//                                     type: 'object',
//                                     properties: {
//                                         'request:status': {
//                                             oneOf: [
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Cancelled',
//                                                     enum: ['cancelled']
//                                                 },
//                                                 { description: 'language:en-GB', title: 'Closed', enum: ['closed'] },
//                                                 { description: 'language:en-GB', title: 'Pending', enum: ['pending'] }
//                                             ],
//                                             type: 'string'
//                                         },
//                                         'request:user_id': { type: 'string', maxLength: 30 },
//                                         'request:priority_id': {
//                                             oneOf: [
//                                                 { title: 'Very Low', enum: ['very_low'] },
//                                                 { title: 'Low', enum: ['low'] },
//                                                 { title: 'Medium', enum: ['medium'] },
//                                                 { title: 'High', enum: ['high'] },
//                                                 { title: 'Very High', enum: ['very_high'] }
//                                             ],
//                                             type: 'string'
//                                         },
//                                         'request:title': { type: 'string', maxLength: 100 },
//                                         'request:party_label': { type: 'string', maxLength: 70 },
//                                         'request:due_date': { format: 'date', type: 'string' },
//                                         'request:workqueue': { format: 'uri', type: 'string' }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };
