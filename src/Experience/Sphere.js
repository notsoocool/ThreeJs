import * as THREE from 'three'
import Experience from './Experience'
import vertexShader from './shaders/sphere/vertex.glsl'
import fragmentShader from './shaders/sphere/fragment.glsl'

export default class Sphere {
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        
        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.SphereGeometry(1, 32, 32)
    }
    setMaterial()
    {
        this.material = new THREE.ShaderMaterial({ 
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        })
    }
    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }
}