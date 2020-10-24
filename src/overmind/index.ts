import { IConfig, createOvermind, OnInitialize } from 'overmind'
import { state } from './state'
import * as effects from './effects'
import * as actions from './actions'
import { createHook } from 'overmind-react'

const onInitialize: OnInitialize = async ({ actions }) => {
  await actions.loadData()
}

const config = {
  state,
  effects,
  actions,
  onInitialize,
}

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config)

export const useOvermind = createHook<typeof config>()
