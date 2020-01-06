const endpoints = {
    "features": [
        {
            "id": "wca-ia-overview",
            "title": "Overview",
            "menuType": "headerMenu",
            "icon": "workspace",
            "type": "IFRAME",
            "navigation": {
                "route": {
                    "path": "/Overview",
                    "link": "https://engage-qa1.adm01.com/home.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                }
            }
        },
        {
            "id": "wca-ia-search",
            "title": "Search",
            "menuType": "headerMenu",
            "icon": "search",
            "type": "IFRAME",
            "navigation": {
                "route": {
                    "path": "/Search",
                    "link": "https://engage-qa1.adm01.com/globalSearch.do?action=???&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                }
            }
        },
        {
            "id": "wca-ia-reports",
            "title": "Reports",
            "menuType": "mainMenu",
            "icon": "bar",
            "features": [
                {
                    "id": "wca-ia-reports-performance-insights",
                    "title": "Performance insights",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Reports/Performance_insights",
                            "link": "localhost:5001"
                        }
                    }
                },
                {
                    "id": "wca-ia-reports-inbox-monitoring",
                    "title": "Inbox monitoring",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Reports/Inbox_monitoring",
                            "link": "https://engage-qa1.adm01.com/jsp/reports/newInboxMonitoringReport.jsp"
                        }
                    }
                },
                {
                    "id": "wca-ia-reports-other",
                    "title": "Reports (classic)",
                    "features": [
                        {
                            "id": "wca-ia-reports-report-center",
                            "title": "Report center",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Reports_center",
                                    "link": "https://engage-qa1.adm01.com/reportNew.do?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-reports-other-automated-messages",
                            "title": "Automated messages",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Automated_messages",
                                    "link": "https://engage-qa1.adm01.com/reportsCampSelection.do?destAction=reportsCampaign&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-reports-other-single-mailing",
                            "title": "Single mailing",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Single_mailing",
                                    "link": "https://engage-qa1.adm01.com/reports.do?action=reportsMailingSelection&destAction=reportsSummary&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-reports-other-multiple-mailings",
                            "title": "Multiple mailings",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Multiple_mailings",
                                    "link": "https://engage-qa1.adm01.com/reports.do?action=reportsMultipleMailingSelection&validListView=lists&destAction=reportsMultiple&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-reports-other-other-comparison",
                            "title": "Comparison",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Comparison",
                                    "link": "https://engage-qa1.adm01.com/reports.do?action=reportsMultipleMailingSelection&validListView=lists&destAction=reportsComparison&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-reports-other-other-subscribers",
                            "title": "Subscribers",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Subscribers",
                                    "link": "https://engage-qa1.adm01.com/selectSubscriberList.do?action=prepareSelectList&destAction=reportsSubscribers&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-reports-other-analytic-reporting",
                            "title": "Analytics",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Reports/classic_reports/Analytics",
                                    "link": "https://engage-qa1.adm01.com/pivotActiveReportManagement.do?action=refresh&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "wca-ia-data",
            "title": "Data",
            "menuType": "mainMenu",
            "icon": "table",
            "features": [
                {
                    "id": "wca-ia-data-databases",
                    "title": "Databases",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Databases",
                            "link": "https://engage-qa1.adm01.com/lists.do?action=displayLists&listTabDefinition=tabC&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-data-queries",
                    "title": "Queries",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Queries",
                            "link": "https://engage-qa1.adm01.com/lists.do?action=displayLists&listTabDefinition=tabQ&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-data-contactlists",
                    "title": "Contact lists",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Contact_Lists",
                            "link": "https://engage-qa1.adm01.com/lists.do?action=displayLists&listTabDefinition=tabSL&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-data-import-new",
                    "title": "Import new",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Import_New",
                            "link": "https://engage-qa1.adm01.com/lists.do?action=startImportList&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-data-import-update",
                    "title": "Import update",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Import_Update",
                            "link": "https://engage-qa1.adm01.com/lists.do?action=startUpdateImportList&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-data-datajobs",
                    "title": "Data jobs",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Data_jobs",
                            "link": "https://engage-qa1.adm01.com/dataJobs.do?currentDataJobTab=dataJobsRegularTab&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-data-gdprjobs",
                    "title": "GDPR jobs",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Data/Gdpr_jobs",
                            "link": "https://engage-qa1.adm01.com/ux?hash=%23%2Fgdprjoblisting&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/gdprjoblisting"
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-content",
            "title": "Content",
            "menuType": "mainMenu",
            "icon": "document",
            "features": [
                {
                    "id": "wca-ia-content-asset-library",
                    "title": "Asset library",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Content/asset-library",
                            "link": "https://engage-qa1.adm01.com/assetLibrary.do?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-content-stored-files",
                    "title": "Stored files",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Content/Stored_files",
                            "link": "https://engage-qa1.adm01.com/storedFiles.do?action=refresh&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-email",
            "title": "Email",
            "menuType": "mainMenu",
            "icon": "email",
            "features": [
                {
                    "id": "wca-ia-email-campaigns",
                    "title": "Email campaigns",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Email/Email_campaigns",
                            "link": "https://engage-qa1.adm01.com/mailingsManagementTemplate.do?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-email-mailing-drafts",
                    "title": "Drafts",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Email/Drafts",
                            "link": "https://engage-qa1.adm01.com/mailingDrafts.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-email-test-send",
                    "title": "Test and send",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Email/Send_email",
                            "link": "https://engage-qa1.adm01.com/deliveryHub.action?hash=%23chooseType%3Dtrue&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#chooseType=true"
                        }
                    }
                },
                {
                    "id": "wca-ia-email-sent-scheduled",
                    "title": "Scheduled and sent",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Email/Scheduled_and_sent",
                            "link": "https://engage-qa1.adm01.com/message-management?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-email-sent-archive",
                    "title": "Sent archive",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Email/Sent_archive",
                            "link": "https://engage-qa1.adm01.com/reportsArchive.do?currentTab=Mailings&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-email-sendmessage",
                    "title": "Send message",
                    "type": "IFRAME",
                    "hidden": true,
                    "navigation": {
                        "route": {
                            "path": "/Email/Send_message",
                            "link": "https://engage-qa1.adm01.com/mailingDrafts.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-email-new-template-with-wch-integration-wca-option",
                    "title": "WCA New email",
                    "type": "IFRAME",
                    "hidden": true,
                    "navigation": {
                        "route": {
                            "path": "/Email/New/Mailing_template",
                            "link": "https://engage-qa1.adm01.com/ux/?hash=%23%2FnewMailing&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/newMailing"
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-mobile",
            "title": "Mobile",
            "menuType": "mainMenu",
            "icon": "mobile",
            "features": [
                {
                    "id": "wca-ia-mobile-messages-templates",
                    "title": "Messages and templates",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Mobile/Messages_and_templates",
                            "link": "https://engage-qa1.adm01.com/mailingsManagementUtil.do?action=loadLastSelectedTab&sms=true&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-mobile-message-drafts",
                    "title": "Message drafts ",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Mobile/Message_drafts",
                            "link": "https://engage-qa1.adm01.com/pushDrafts.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-mobile-dev-resources",
                    "title": "Developer resources",
                    "features": [
                        {
                            "id": "wca-ia-mobile-resources-apps",
                            "title": "Apps",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Mobile/Developer_resources/Apps",
                                    "link": "https://engage-qa1.adm01.com/mobile/?hash=%23%2Fviewapp&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/viewapp"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-mobile-resources-app-groups",
                            "title": "App groups",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Mobile/Developer_resources/App_Groups",
                                    "link": "https://engage-qa1.adm01.com/mobile/?hash=%23%2Fviewappgroup&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/viewappgroup"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-mobile-resources-actions",
                            "title": "Actions",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Mobile/Developer_resources/Actions",
                                    "link": "https://engage-qa1.adm01.com/mobile/?hash=%23%2Fcreateaction&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/createaction"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-mobile-resources-actions2",
                            "title": "Actions 2.0 (Beta)",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Mobile/Developer_resources/Actions2",
                                    "link": "https://engage-qa1.adm01.com/mobile/?hash=%23%2Factions&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/actions"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-mobile-resources-templates",
                            "title": "Templates",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Mobile/Developer_resources/Templates",
                                    "link": "https://engage-qa1.adm01.com/mobile/?hash=%23%2Fcreatetemplate&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#/createtemplate"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "wca-ia-sms",
            "title": "SMS",
            "menuType": "mainMenu",
            "icon": "chat",
            "features": [
                {
                    "id": "wca-ia-sms-messages-templates",
                    "title": "Messages and templates",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/SMS/Messages_and_templates",
                            "link": "https://engage-qa1.adm01.com/mailingsManagementUtil.do?action=loadLastSelectedTab&sms=true&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-sms-drafts",
                    "title": "SMS drafts",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/SMS/Drafts",
                            "link": "https://engage-qa1.adm01.com/smsDrafts.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-sms-sms-programs",
                    "title": "SMS programs",
                    "type": "ANGULAR",
                    "navigation": {
                        "route": {
                            "path": "/sms/programs",
                            "link": "https://engage-qa1.adm01.com?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-sms-smpp-character-mapping",
                    "title": "Character mapping",
                    "type": "ANGULAR",
                    "navigation": {
                        "route": {
                            "path": "/sms/character-mapping",
                            "link": "https://engage-qa1.adm01.com?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-landing-pages",
            "title": "Landing pages",
            "menuType": "mainMenu",
            "icon": "blog",
            "type": "IFRAME",
            "navigation": {
                "route": {
                    "path": "/Landing_pages",
                    "link": "https://engage-qa1.adm01.com/landingPages.do?hash=%23SiteListController&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#SiteListController"
                }
            }
        },
        {
            "id": "wca-ia-automation",
            "title": "Automation",
            "menuType": "mainMenu",
            "icon": "network",
            "features": [
                {
                    "id": "wca-ia-automation-programs",
                    "title": "Programs",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Automation/Programs",
                            "link": "https://engage-qa1.adm01.com/campaigns/viewCampaigns.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-automation-automated-message",
                    "title": "Automated message groups",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Automation/Automated_messages_groups",
                            "link": "https://engage-qa1.adm01.com/campaignsActive.do?action=listActive&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-automation-programs-flow",
                    "title": "Programs Flow",
                    "type": "IFRAME",
                    "hidden": true,
                    "navigation": {
                        "route": {
                            "path": "/Automation/Programs/ProgramFlow",
                            "link": "https://engage-qa1.adm01.com/programs/#/programsflow?hash=%23%2Fprogramsflow&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6",
                            "appendQueryParametersAfterFragment": true
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-scoring",
            "title": "Scoring",
            "menuType": "mainMenu",
            "icon": "admin",
            "features": [
                {
                    "id": "wca-ia-scoring-models",
                    "title": "Scoring models",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Scoring/Scoring_models",
                            "link": "https://engage-qa1.adm01.com/leads/index.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-scoring-alerts",
                    "title": "Alerts",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Scoring/Alerts",
                            "link": "https://engage-qa1.adm01.com/alert/index.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-applications",
            "title": "Applications",
            "menuType": "mainMenu",
            "icon": "application",
            "features": [
                {
                    "id": "wca-ia-applications-survey-connector",
                    "title": "Survey connector",
                    "navigation": {
                        "url": {
                            "link": "https://survey-staging.ibmmarketingcloud.com",
                            "newWindow": true
                        }
                    }
                }
            ]
        },
        {
            "id": "wca-ia-settings",
            "title": "Settings",
            "menuType": "headerMenu",
            "icon": "settings",
            "features": [
                {
                    "id": "wca-ia-settings-user-profile",
                    "title": "User profile",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Settings/User_profile",
                            "link": "https://engage-qa1.adm01.com/settings.do?action=userProfile&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-settings-admin-users",
                    "title": "User management",
                    "type": "IFRAME",
                    "navigation": {
                        "route": {
                            "path": "/Settings/User_management",
                            "link": "https://engage-qa1.adm01.com/orgAdmin.do?action=listUserAccounts&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                        }
                    }
                },
                {
                    "id": "wca-ia-settings-admin",
                    "title": "Administration",
                    "features": [
                        {
                            "id": "wca-ia-settings-org-admin-approval-groups",
                            "title": "Approval groups",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Administration/Approval_groups",
                                    "link": "https://engage-qa1.adm01.com/approvalGroupsListManagement.do?action=listApprovalGroups&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-org-admin-org-settings",
                            "title": "Organization settings",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Administration/Organization_settings",
                                    "link": "https://engage-qa1.adm01.com/viewOrganization.do?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-org-admin-email-blocking",
                            "title": "Email blocking",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Administration/Email_blocking",
                                    "link": "https://engage-qa1.adm01.com/orgAdminEmailBlocking.do?action=displayEmailBlockingDomainList&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-org-admin-admin-security",
                            "title": "Security settings",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Administration/Security_settings",
                                    "link": "https://engage-qa1.adm01.com/orgAdminSecuritySettingMaintenance.do?action=editSettings&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-org-admin-dll_whitelist",
                            "title": "DLL whitelist",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Administration/DLL_Whitelist",
                                    "link": "https://engage-qa1.adm01.com/orgsettings/dll.action?isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        }
                    ]
                },
                {
                    "id": "wca-ia-settings-activity-reports",
                    "title": "Activity reports",
                    "features": [
                        {
                            "id": "wca-ia-settings-activity-reports-mailings",
                            "title": "Mailing report",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/Mailing_report",
                                    "link": "https://engage-qa1.adm01.com/reportsAllMailingsOrgAdmin.do?action=reportsAllMailings&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-activity-reports-billing",
                            "title": "Billing report",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/Billing_report",
                                    "link": "https://engage-qa1.adm01.com/orgBillingInfo.do?action=showOrgBillingInfoSelection&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-activity-reports-inactivity",
                            "title": "Inactivity report",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/Inactivity_report",
                                    "link": "https://engage-qa1.adm01.com/sysAdminUnusedMailings.do?action=unusedAutomatedMailingsForOrg&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-activity-site-activity",
                            "title": "Site activity report",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/Site_activity_report",
                                    "link": "https://engage-qa1.adm01.com/sitesActivityController.do?hash=%23SitesActivityController&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6#SitesActivityController"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-activity-reports-dashboard",
                            "title": "Alert dashboard",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/Alert_dashboard",
                                    "link": "https://engage-qa1.adm01.com/orgAdminAlertDashboard.do?action=displayAlertDashboard&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-activity-system-activity",
                            "title": "System activity",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/System_activity",
                                    "link": "https://engage-qa1.adm01.com/orgAdmin.do?action=systemActivity&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        },
                        {
                            "id": "wca-ia-settings-activity-data-jobs",
                            "title": "All data jobs",
                            "type": "IFRAME",
                            "navigation": {
                                "route": {
                                    "path": "/Settings/Activity_reports/All_data_jobs",
                                    "link": "https://engage-qa1.adm01.com/dataJobs.do?action=listDataJobs&source=orgadmin&isShellUser=1&tenantId=37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
        "metadata": {
        "wch-tenantID": "ac0f3f2c-8685-44c2-92d4-aba2303a2048",
            "wca-message-api-url": "https://engage-qa1.adm01.com/message-management/rest/api/",
                "application-url": "https://engage-qa1.adm01.com",
                    "shell-auth-api-url": "https://engage-qa1-shell-api.adm01.com",
                        "IBMMeta": {
            "apiHost": "https://engage-qa1-api.adm01.com",
                "applicationPermissions": {
                "Survey Connector": true,
                    "Performance Insights": true,
                        "Social Audiences (DO NOT USE - DEPRECATED)": false,
                            "Device Location Awareness": false,
                                "Watson Real-Time Personalization": false
            },
            "billingId": "SLVRPOP",
                "casHost": "https://engage-qa1-sso.adm01.com",
                    "customerName": "InfoBip-smpp-qa1",
                        "daysSinceFirstLogin": 164,
                            "fromShell": true,
                                "offeringId": "5725-S87",
                                    "offeringName": "Campaign Automation",
                                        "organizationId": "249f1d4a-166113962a4-2b052f2fd757abaa295b8c317ca481e9",
                                            "podName": "qa1",
                                                "prodVersion": "Built by jenkins on Jan 6 2020 at 0515 : pre-master.4774 : 19010000PM.4774",
                                                    "shellUser": true,
                                                        "smppNamespace": "qa1",
                                                            "smppRegion": "us-east",
                                                                "testData": true,
                                                                    "timeZone": 7,
                                                                        "timeZoneGmtOffset": -5,
                                                                            "userCountry": "US",
                                                                                "userEmail": "yksmpp485@sp.com",
                                                                                    "userFirstName": "ykanevsk",
                                                                                        "userId": "37117e00-16c2b31da0d-fe154a13e7aff661200edcf73a623cd6",
                                                                                            "userLanguage": "en",
                                                                                                "userLastName": "Infobip",
                                                                                                    "userLocale": "en_US",
                                                                                                        "userName": "Infobip, ykanevsk",
                                                                                                            "userPermissions": {
                "ACCESS_PUBLISH_LOCKED_TEMPLATES": true,
                    "EDIT_CONTACTS": true,
                        "ACCESS_INBOX_MONITORING": true,
                            "ACCESS_ALL_SITES_REPORTS": true,
                                "ACCESS_CREATE_MAILING_TEMPLATES": true,
                                    "ACCESS_PUSH_APPS": true,
                                        "ACCESS_CRM": false,
                                            "ACCESS_PUBLISH_SITES": true,
                                                "ACCESS_FREQUENCY_SETTINGS": true,
                                                    "ACCESS_SEND": true,
                                                        "ACCESS_LANDING_PAGES": true,
                                                            "VIEW_AND_EDIT_PROGRAMS": true,
                                                                "ACCESS_QUICK_COMPOSE": true,
                                                                    "ACCESS_AUTOMATED_MESSAGE_GROUPS": true,
                                                                        "ACCESS_SMS": true,
                                                                            "ACCESS_CREATE_SITES_ADVANCED": true,
                                                                                "ACCESS_VMTAS": true,
                                                                                    "ACCESS_ANOMALY_DETECTION": false,
                                                                                        "EDIT_QUERIES": true,
                                                                                            "ACCESS_DATABASES": true,
                                                                                                "ACCESS_PUSH": true,
                                                                                                    "WATSON_CONTENT_HUB_INTEGRATION": false
            },
            "userPrimaryRole": "Org Admin User"
        }
    }
    }
module.exports = endpoints

