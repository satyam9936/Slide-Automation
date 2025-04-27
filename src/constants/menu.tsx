import { AutomationDuoToneWhite } from '@/icons/automation-duotone-white'
import { HomeDuoToneWhite } from '@/icons/home-duo-tone-white'
import { RocketDuoToneWhite } from '@/icons/rocket-duotone-white'
import { SettingsDuoToneWhite } from '@/icons/settings-duotone-white'
import React from 'react'
import {v4 as uuid} from 'uuid'

type Fieldprops={
    label: string
    id:string
}

type SideBarProps={
icon: React.ReactNode
}& Fieldprops

export const SIDEBAR_MENU: SideBarProps[]=[
{
id: uuid(),
label: 'home',
icon: <HomeDuoToneWhite/>,
},

{
    id: uuid(),
    label: 'Automation',
    icon: <AutomationDuoToneWhite/>,
    },

    {
        id: uuid(),
        label: 'Rocket',
        icon: <RocketDuoToneWhite/>,
        },

        {
            id: uuid(),
            label: 'Setting',
            icon: <SettingsDuoToneWhite/>,
            },
]

