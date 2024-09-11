import { Panel } from 'reactflow'

const SettingsPanel = ({
  settings,
  setSettings,
  handleDownloadImage,
  onLayout,
  showSettings,
}) => {
  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value })
  }
  const handleFalseShowSettings = () => {
    showSettings(false)
  }
  return (
    <Panel
      className="settings w-64 bg-white border p-2 rounded-lg flex flex-col"
      position="top-right"
      style={{ top: '40px' }}
    >
      <fieldset className="">
        <legend className="text-sm font-semibold">Show Options</legend>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={settings.showControls}
              onChange={(e) => handleChange('showControls', e.target.checked)}
              className="ml-2"
            />
            <span className="ml-2">Show Controls</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={settings.showMiniMap}
              onChange={(e) => handleChange('showMiniMap', e.target.checked)}
              className="ml-2"
            />
            <span className="ml-2">Show MiniMap</span>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold">Download</legend>
        <button
          onClick={() => {
            handleDownloadImage()
            handleFalseShowSettings()
          }}
          className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Download Image
        </button>
      </fieldset>
    </Panel>
  )
}

export default SettingsPanel
