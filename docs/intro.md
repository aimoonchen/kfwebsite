---
sidebar_position: 1
---

# Tutorial Intro

import clsx from "clsx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const lusCodeString = `local app = {
    running = false,
    yaw = 0,
    pitch = 0,
    MOVE_SPEED = 6.0,
}
function app:GetName()
    return "Demo"
end
function app:OnUpdate(eventType, eventData)
    local timeStep = eventData[ParamType.P_TIMESTEP]:GetFloat()
end
function app:OnSceneUpdate(eventType, eventData)
    local timeStep = eventData[ParamType.P_TIMESTEP]:GetFloat()
    app:UpdateCamera(timeStep)
end
function app:OnPostUpdate(eventType, eventData)
end
function app:OnPostRenderUpdate(eventType, eventData)
end
function app:UpdateCamera(timeStep)
    if not FairyGUI.IsFocusUI() then
        local update = false
        if touchEnabled then
            for i=0, input_system:GetNumTouches()-1 do
                local state = input_system:GetTouch(i)
                if state.delta.x or state.delta.y then
                    local camera = self.camera_node:GetComponent(Camera.id)
                    if not camera then
                        return
                    end
                    self.yaw = self.yaw + TOUCH_SENSITIVITY * camera.fov / graphics_system.height * state.delta.x
                    self.pitch = math3d.ClampF(self.pitch + TOUCH_SENSITIVITY * camera.fov / graphics_system.height * state.delta.y, -90.0, 90.0)
                    update = true
                end
            end
        elseif input_system:GetMouseButtonDown(input.MOUSEB_RIGHT) then
            -- Mouse sensitivity as degrees per pixel
            local MOUSE_SENSITIVITY = 0.1
            -- Use this frame's mouse motion to adjust camera node yaw and pitch. Clamp the pitch between -90 and 90 degrees
            local mouseMove = input_system.mouseMove
            self.yaw = self.yaw + MOUSE_SENSITIVITY * mouseMove.x
            self.pitch = math3d.ClampF(self.pitch + MOUSE_SENSITIVITY * mouseMove.y, -90.0, 90.0)
            update = true
        end
        if update then
            -- Construct new orientation for the camera scene node from yaw and pitch. Roll is fixed to zero
            self.camera_node.rotation = math3d.Quaternion(self.pitch, self.yaw, 0.0)
        end
    end
    local move = false
    local controlDirection = math3d.Vector3(0.0, 0.0, 0.0)
    if FairyGUI.IsJoystickCapture() then
        controlDirection = math3d.Quaternion(0.0, FairyGUI.GetJoystickRotation() + 180, 0.0) * math3d.Vector3.BACK
        controlDirection:Normalize()
        move = true
    elseif not FairyGUI.IsInputing() then
        if input_system:GetKeyDown(input.KEY_W) then
            controlDirection = math3d.Vector3.FORWARD
            move = true
        end
        if input_system:GetKeyDown(input.KEY_S) then
            controlDirection = math3d.Vector3.BACK
            move = true
        end
        if input_system:GetKeyDown(input.KEY_A) then
            controlDirection = math3d.Vector3.LEFT
            move = true
        end
        if input_system:GetKeyDown(input.KEY_D) then
            controlDirection = math3d.Vector3.RIGHT
            move = true
        end
    end
    if move then
        self.camera_node:Translate(controlDirection * self.MOVE_SPEED * timeStep)
    end
end
function app:CreateScene(uiroot)
    -- create scene
    local scene = Scene()
    scene:CreateComponent(Octree.id)
    local zone = scene:CreateComponent(Zone.id)
    zone:SetEnabled(true)
    zone.bounding_box = math3d.BoundingBox(-1000.0, 1000.0)
    zone.ambient_color = math3d.Color(0.5, 0.5, 0.5)
    -- create a model
    local planeNode = scene:CreateChild("Plane")
    planeNode.scale = math3d.Vector3(100.0, 1.0, 100.0)
    local plane = planeNode:CreateComponent(StaticModel.id)
    plane:SetModel(cache:GetResource("Model", "Models/Plane.mdl"))
    local mtl = cache:GetResource("Material", "Materials/GridTiled.xml")
    mtl:SetShaderParameter("UOffset", Variant(math3d.Vector4(100.0, 0.0, 0.0, 0.0)))
    mtl:SetShaderParameter("VOffset", Variant(math3d.Vector4(0.0, 100.0, 0.0, 0.0)))
    plane:SetMaterial(mtl)
    -- create directional light
    local lightNode = scene:CreateChild("DirectionalLight")
    lightNode.direction = math3d.Vector3(0.6, -1.0, 0.8) -- The direction vector does not need to be normalized
    local light = lightNode:CreateComponent(Light.id)
    light.light_type = LIGHT_DIRECTIONAL
    light.color = math3d.Color(0.5, 0.5, 0.5)
    -- create camera
    local cameraNode = scene:CreateChild("Camera")
    cameraNode.position = math3d.Vector3(0.0, 3.0, -10.0)
    cameraNode:LookAt(math3d.Vector3(0.0, 0.0, 0.0))
    local camera = cameraNode:CreateComponent(Camera.id)
    graphics_system:SetBGFXCamera(camera)
    app.scene       = scene
    app.camera_node = cameraNode
    app.camera      = camera
    app.viewport    = viewport
    app.yaw         = cameraNode.rotation:YawAngle()
    app.pitch       = cameraNode.rotation:PitchAngle()
end
function app:SetupViewport(viewport)
    viewport:SetScene(self.scene)
    local camera = self.camera_node:GetComponent(Camera.id)
    viewport:SetCamera(camera)
    if self.ui_view then
        self.uiroot:AddChild(self.ui_view)
    end
end
function app:Load(viewport, uiroot)
    if self.running then
        return
    end
    self.running = true
    if not self.scene then
        self:CreateScene(uiroot)
    end
    self:SetupViewport(viewport)
    self:SubscribeToEvents()
end
function app:Unload()
    if not self.running then
        return
    end
    self.running = false
    if self.ui_view then
        self.uiroot:RemoveChild(self.ui_view)
    end
    self:UnSubscribeToEvents()
end
function app:SubscribeToEvents()
end
function app:UnSubscribeToEvents()
end
return app`;

# Quick Start

Download [KFPlayer](https://kfengine.com/download/KFPlayer.rar) and unzip.

You will have the following project structure:

```
KFPlayer
├─ Assets
│  ├─ Engine (engine builtin reseoures, do not modify)
│  │  ├─ Animations
│  │  ├─ Effekseer
│  │  ├─ Fonts
│  │  ├─ LuaScripts
│  │  ├─ Materials
│  │  ├─ Models
│  │  ├─ PostProcess
│  │  ├─ RenderPaths
│  │  ├─ Scenes
│  │  ├─ Shaders
│  │  ├─ Techniques
│  │  ├─ Textures
│  │  └─ UI
│  └─ Games (you game reseoures)
│     ├─ Effekseer
│     ├─ Fonts
│     ├─ LuaScripts
│     ├─ Materials
│     ├─ Models
│     ├─ Scenes
│     ├─ Textures
│     └─ UI
└─ Player.exe

```
:::tip

reseoures should put in Games directory, scripts should put in Games/LuaScripts directory

:::

:::info

some info

:::

:::caution

some caution

:::

## Write code Main.lua:

<Tabs
  groupId={'target-platform'}
  defaultValue={'lua'}
  values={[
    {label: 'Lua', value: 'lua'},
    {label: 'Python', value: 'python'},
    {label: 'C#', value: 'csharp'},
    {label: 'C++', value: 'cplusplus'},
  ]
  }>
  <TabItem value={'lua'}>
    <SyntaxHighlighter language="lua" showLineNumbers={true} style={dark} >
    {lusCodeString}
    </SyntaxHighlighter>
  </TabItem>
  <TabItem value={'python'}>
  </TabItem>
  <TabItem value={'csharp'}>
  </TabItem>
  <TabItem value={'cplusplus'}>
    <SyntaxHighlighter language="cpp" showLineNumbers={true} style={dark} >
{`auto planeNode = scene->CreateChild("Plane");
planeNode->SetScale(Vector3{100.0f, 1.0f, 100.0f});
auto plane = planeNode->CreateComponent<StaticModel>();
plane->SetModel(cache->GetResource<Model>("Models/Plane.mdl"));
auto mtl = cache->GetResource<Material>("Materials/GridTiled.xml");
mtl->SetShaderParameter("UOffset", Vector4(100.0f, 0.0f, 0.0f, 0.0f));
mtl->SetShaderParameter("VOffset", Vector4(0.0f, 100.0f, 0.0f, 0.0f));
plane->SetMaterial(mtl);`}
    </SyntaxHighlighter>
  </TabItem>
</Tabs>

## Develop with VSCode

Open KFPlayer directory with VSCode

Edit the launch.json like this:

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "BGFXPlayer",
            "type": "cppvsdbg",
            "request": "launch",
            "program": "${workspaceFolder}/Player.exe",
            "args": ["LuaScripts/Lobby.lua"],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "console": "externalTerminal",
            // "preLaunchTask":"${defaultBuildTask}"
        }
    ]
}

```
