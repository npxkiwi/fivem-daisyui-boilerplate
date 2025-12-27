local function openUI()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "setVisible",
        data = {
            visible = true
        }
    })
end

local function closeUI()
    SetNuiFocus(false, false)
    SendNUIMessage({
        action = "setVisible",
        data = {
            visible = false
        }
    })
end

RegisterCommand("openui", function()
    openUI()
end, false)

RegisterCommand("closeui", function()
    closeUI()
end, false)

RegisterNUICallback("exit", function(data, cb)
    closeUI()
    cb({})
end)
