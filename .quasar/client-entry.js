/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



import '@quasar/extras/roboto-font/roboto-font.css'

import '@quasar/extras/material-icons/material-icons.css'




// We load Quasar stylesheet file
import 'quasar/dist/quasar.sass'




import 'src/css/app.scss'

import '@quasar/quasar-app-extension-qpdfviewer/src/component/pdfviewer.styl'

import '@quasar/quasar-app-extension-colorize/src/components/colorize/colorize.styl'


import Vue from 'vue'
import createApp from './app.js'




import qboot_Booti18n from 'boot/i18n'

import qboot_Quasarquasarappextensionqpdfviewersrcbootqpdfviewerjs from '@quasar/quasar-app-extension-qpdfviewer/src/boot/qpdfviewer.js'

import qboot_Quasarquasarappextensioncolorizesrcbootcolorizejs from '@quasar/quasar-app-extension-colorize/src/boot/colorize.js'

import qboot_Quasarquasarappextensioncolorizesrcbootthemejs from '@quasar/quasar-app-extension-colorize/src/boot/theme.js'










const { app, store, router } = createApp()



async function start () {
  
  let routeUnchanged = true
  const redirect = url => {
    routeUnchanged = false
    window.location.href = url
  }

  const urlPath = window.location.href.replace(window.location.origin, '')
  const bootFiles = [qboot_Booti18n,qboot_Quasarquasarappextensionqpdfviewersrcbootqpdfviewerjs,qboot_Quasarquasarappextensioncolorizesrcbootcolorizejs,qboot_Quasarquasarappextensioncolorizesrcbootthemejs]

  for (let i = 0; routeUnchanged === true && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue,
        ssrContext: null,
        redirect,
        urlPath
      })
    }
    catch (err) {
      if (err && err.url) {
        window.location.href = err.url
        return
      }

      console.error('[Quasar] boot error:', err)
      return
    }
  }

  if (routeUnchanged === false) {
    return
  }
  

  

    // prime the store with server-initialized state.
    // the state is determined during SSR and inlined in the page markup.
    
    if (window.__INITIAL_STATE__) {
      store.replaceState(window.__INITIAL_STATE__)
    }
    

    const appInstance = new Vue(app)

    // wait until router has resolved all async before hooks
    // and async components...
    router.onReady(() => {
      
      appInstance.$mount('#q-app')
    })

  

}

start()
