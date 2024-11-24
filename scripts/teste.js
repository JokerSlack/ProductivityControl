let tabUsage = {}; // Objeto para armazenar tempo por aba

// Quando uma aba é atualizada ou aberta
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        console.log(`Acessou: ${tab.url}`);
        /* tabUsage[tabId] = {
            url: tab.url,
            startTime: Date.now()
        };*/
        // mandar para api no electron
    }
});

// Quando uma aba é fechada
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    const tabData = tabUsage[tabId];
    if (tabData) {
        const duration = Date.now() - tabData.startTime;
        console.log(`URL: ${tabData.url} foi fechada. Tempo gasto: ${duration / 1000}s`);
        
        // Enviar dados para o Electron ou salvar localmente
        // delete tabUsage[tabId]; // Limpar o registro da aba fechada
        // mandar para API no electron.
    }
});