// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import authLoginReducer from '../features/auth/slice/authSlice'
import workflowReducer from '../features/workflow/slice/workflowIdSlice'
import nodesReducer from '../features/workflow/slice/nodesSlice'
import edgesReducer from '../features/workflow/slice/edgesSlice'
import runWorkflowReducer from '../features/code-runner/slice/runWorkflowSlice'
import deployWorkflowReducer from '../features/deploy-workflow/slice/deploySlice'
import funNodeReducer from '../features/code-runner/slice/buildNodeSlice'
import teamplateReducer from '../features/templates/slice/templatesSlice'
import synWorkflowReducer from '../features/syn/slice/synSlice'
import appCodeReducer from '../features/app-code/slice/codeSlice'
import coreCodeReducer from '../features/core-code/slice/coreCodeSlice'
import funCoreReducer from '../features/app-code-runner/slice/buildAppCoreFunSlice'
import webhookReducer from '../features/webhook/webhookSlice'
const store = configureStore({
  reducer: {
    auth: authLoginReducer,
    workflow: workflowReducer,
    nodes: nodesReducer,
    edges: edgesReducer,
    runWorkflow: runWorkflowReducer,
    deployWorkflow: deployWorkflowReducer,
    funNode: funNodeReducer,
    templatesWorkflow: teamplateReducer,
    synWorkflow: synWorkflowReducer,
    appCode: appCodeReducer,
    coreCode: coreCodeReducer,
    funCore: funCoreReducer,
    webhook: webhookReducer,
  },
})
export default store
