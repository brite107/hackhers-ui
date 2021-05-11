import React from 'react';
import * as RiIcons from 'react-icons/ri'

/**
 * @name SidebarData
 * @description this is the data used to fill in the accordion menu.
 */
export const SidebarData = [
    {
        title: 'MENS',
        path: '/products/Men',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Categories',
                path: '/products/Men',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subMenu: [
                    {
                        title: "Baseball",
                        path: "/products/Men/category/Baseball"
                    },
                    {
                        title: "Basketball",
                        path: "/products/Men/category/Basketball"
                    },
                    {
                        title: "Boxing",
                        path: "/products/Men/category/Boxing"
                    },
                    {
                        title: "Football",
                        path: "/products/Men/category/Football"
                    },
                    {
                        title: "Golf",
                        path: "/products/Men/category/Golf"
                    },
                    {
                        title: "Hockey",
                        path: "/products/Men/category/Hockey"
                    },
                    {
                        title: "Running",
                        path: "/products/Men/category/Running"
                    },
                    {
                        title: "Skateboarding",
                        path: "/products/Men/category/Skateboarding"
                    },
                    {
                        title: "Soccer",
                        path: "/products/Men/category/Soccer"
                    },
                    {
                        title: "Weightlifting",
                        path: "/products/Men/category/Weightlifting"
                    }
                ]
            },
            {
                title: 'Types',
                path: '/products/Men',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subMenu: [
                    {
                        title: "Belt",
                        path: "/products/Men/type/Belt"
                    },
                    {
                        title: "Elbow Pad",
                        path: "/products/Men/type/Elbow+Pad"
                    },
                    {
                        title: "Flip Flop",
                        path: "/products/Men/type/Flip+Flop"
                    },
                    {
                        title: "Glove",
                        path: "/products/Men/type/Glove"
                    },
                    {
                        title: "Hat",
                        path: "/products/Men/type/Hat"
                    },
                    {
                        title: "Headband",
                        path: "/products/Men/type/Headband"
                    },
                    {
                        title: "Helmet",
                        path: "/products/Men/type/Helmet"
                    },
                    {
                        title: "Hoodie",
                        path: "/products/Men/type/Hoodie"
                    },
                    {
                        title: "Jacket",
                        path: "/products/Men/type/Jacket"
                    },
                    {
                        title: "Pant",
                        path: "/products/Men/type/Pant"
                    },
                    {
                        title: "Pool Noodle",
                        path: "/products/Men/type/Pool+Noodle"
                    },
                    {
                        title: "Shin Guard",
                        path: "/products/Men/type/Shin+Guard"
                    },
                    {
                        title: "Shoe",
                        path: "/products/Men/type/Shoe"
                    },
                    {
                        title: "Short",
                        path: "/products/Men/type/Short"
                    },
                    {
                        title: "Sock",
                        path: "/products/Men/type/Sock"
                    },{
                        title: "Sunglasses",
                        path: "/products/Men/type/Sunglasses"
                    },{
                        title: "Tank Top",
                        path: "/products/Men/type/Tank+Top"
                    },{
                        title: "Visor",
                        path: "/products/Men/type/Visor"
                    },{
                        title: "Wristband",
                        path: "/products/Men/type/Wristband"
                    },
                ]
            }
        ]
    },
    {
        title: 'WOMENS',
        path: '/products/Women',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Categories',
                path: '/products/Women',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subMenu: [
                    {
                        title: "Baseball",
                        path: "/products/Women/category/Baseball"
                    },
                    {
                        title: "Basketball",
                        path: "/products/Women/category/Basketball"
                    },
                    {
                        title: "Boxing",
                        path: "/products/Women/category/Boxing"
                    },
                    {
                        title: "Football",
                        path: "/products/Women/category/Football"
                    },
                    {
                        title: "Golf",
                        path: "/products/Women/category/Golf"
                    },
                    {
                        title: "Hockey",
                        path: "/products/Women/category/Hockey"
                    },
                    {
                        title: "Running",
                        path: "/products/Women/category/Running"
                    },
                    {
                        title: "Skateboarding",
                        path: "/products/Women/category/Skateboarding"
                    },
                    {
                        title: "Soccer",
                        path: "/products/Women/category/Soccer"
                    },
                    {
                        title: "Weightlifting",
                        path: "/products/Women/category/Weightlifting"
                    }
                ]
            },
            {
                title: 'Types',
                path: '/products/Women',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subMenu: [
                    {
                        title: "Belt",
                        path: "/products/Women/type/Belt"
                    },
                    {
                        title: "Elbow Pad",
                        path: "/products/Women/type/Elbow+Pad"
                    },
                    {
                        title: "Flip Flop",
                        path: "/products/Women/type/Flip+Flop"
                    },
                    {
                        title: "Glove",
                        path: "/products/Women/type/Glove"
                    },
                    {
                        title: "Hat",
                        path: "/products/Women/type/Hat"
                    },
                    {
                        title: "Headband",
                        path: "/products/Women/type/Headband"
                    },
                    {
                        title: "Helmet",
                        path: "/products/Women/type/Helmet"
                    },
                    {
                        title: "Hoodie",
                        path: "/products/Women/type/Hoodie"
                    },
                    {
                        title: "Jacket",
                        path: "/products/Women/type/Jacket"
                    },
                    {
                        title: "Pant",
                        path: "/products/Women/type/Pant"
                    },
                    {
                        title: "Pool Noodle",
                        path: "/products/Women/type/Pool+Noodle"
                    },
                    {
                        title: "Shin Guard",
                        path: "/products/Women/type/Shin+Guard"
                    },
                    {
                        title: "Shoe",
                        path: "/products/Women/type/Shoe"
                    },
                    {
                        title: "Short",
                        path: "/products/Women/type/Short"
                    },
                    {
                        title: "Sock",
                        path: "/products/Women/type/Sock"
                    },{
                        title: "Sunglasses",
                        path: "/products/Women/type/Sunglasses"
                    },{
                        title: "Tank Top",
                        path: "/products/Women/type/Tank+Top"
                    },{
                        title: "Visor",
                        path: "/products/Women/type/Visor"
                    },{
                        title: "Wristband",
                        path: "/products/Women/type/Wristband"
                    },
                ]
            }
        ]
    },
    {
        title: 'KIDS',
        path: '/products/Kids',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Categories',
                path: '/products/Kids',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subMenu: [
                    {
                        title: "Baseball",
                        path: "/products/Kids/category/Baseball"
                    },
                    {
                        title: "Basketball",
                        path: "/products/Kids/category/Basketball"
                    },
                    {
                        title: "Boxing",
                        path: "/products/Kids/category/Boxing"
                    },
                    {
                        title: "Football",
                        path: "/products/Kids/category/Football"
                    },
                    {
                        title: "Golf",
                        path: "/products/Kids/category/Golf"
                    },
                    {
                        title: "Hockey",
                        path: "/products/Kids/category/Hockey"
                    },
                    {
                        title: "Running",
                        path: "/products/Kids/category/Running"
                    },
                    {
                        title: "Skateboarding",
                        path: "/products/Kids/category/Skateboarding"
                    },
                    {
                        title: "Soccer",
                        path: "/products/Kids/category/Soccer"
                    },
                    {
                        title: "Weightlifting",
                        path: "/products/Kids/category/Weightlifting"
                    }
                ]
            },
            {
                title: 'Types',
                path: '/products/Kids',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subMenu: [
                    {
                        title: "Belt",
                        path: "/products/Kids/type/Belt"
                    },
                    {
                        title: "Elbow Pad",
                        path: "/products/Kids/type/Elbow+Pad"
                    },
                    {
                        title: "Flip Flop",
                        path: "/products/Kids/type/Flip+Flop"
                    },
                    {
                        title: "Glove",
                        path: "/products/Kids/type/Glove"
                    },
                    {
                        title: "Hat",
                        path: "/products/Kids/type/Hat"
                    },
                    {
                        title: "Headband",
                        path: "/products/Kids/type/Headband"
                    },
                    {
                        title: "Helmet",
                        path: "/products/Kids/type/Helmet"
                    },
                    {
                        title: "Hoodie",
                        path: "/products/Kids/type/Hoodie"
                    },
                    {
                        title: "Jacket",
                        path: "/products/Kids/type/Jacket"
                    },
                    {
                        title: "Pant",
                        path: "/products/Kids/type/Pant"
                    },
                    {
                        title: "Pool Noodle",
                        path: "/products/Kids/type/Pool+Noodle"
                    },
                    {
                        title: "Shin Guard",
                        path: "/products/Kids/type/Shin+Guard"
                    },
                    {
                        title: "Shoe",
                        path: "/products/Kids/type/Shoe"
                    },
                    {
                        title: "Short",
                        path: "/products/Kids/type/Short"
                    },
                    {
                        title: "Sock",
                        path: "/products/Kids/type/Sock"
                    },{
                        title: "Sunglasses",
                        path: "/products/Kids/type/Sunglasses"
                    },{
                        title: "Tank Top",
                        path: "/products/Kids/type/Tank+Top"
                    },{
                        title: "Visor",
                        path: "/products/Kids/type/Visor"
                    },{
                        title: "Wristband",
                        path: "/products/Kids/type/Wristband"
                    },
                ]
            }
        ]
    },
];
