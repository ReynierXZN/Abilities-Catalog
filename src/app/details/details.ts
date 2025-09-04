import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  productId: number | null = null;
  product: any = null;

  products = [
    {id: 1, name: "Phoenix - Blaze", price: 500, location: "Valorant Training Grounds", details: "Creates a wall of fire that blocks vision and damages enemies."},
    {id: 2, name: "Phoenix - Curveball", price: 300, location: "Valorant Training Grounds", details: "Flashbang that curves around corners."},
    {id: 3, name: "Jett - Tailwind", price: 400, location: "Valorant Training Grounds", details: "Dash in the direction she is moving."},
    {id: 4, name: "Jett - Updraft", price: 350, location: "Valorant Training Grounds", details: "Propels Jett into the air."},
    {id: 5, name: "Sage - Barrier Orb", price: 450, location: "Valorant Training Grounds", details: "Deploys a solid wall that can be rotated before placing."},
    {id: 6, name: "Sage - Healing Orb", price: 500, location: "Valorant Training Grounds", details: "Heals allies or herself over time."},
    {id: 7, name: "Reyna - Leer", price: 300, location: "Valorant Training Grounds", details: "Throws an eye that nearsights enemies."},
    {id: 8, name: "Reyna - Devour", price: 400, location: "Valorant Training Grounds", details: "Consumes soul orbs to heal."},
    {id: 9, name: "Brimstone - Incendiary", price: 350, location: "Valorant Training Grounds", details: "Launches a grenade that creates a damaging fire zone."},
    {id: 10, name: "Brimstone - Stim Beacon", price: 300, location: "Valorant Training Grounds", details: "Boosts fire rate of nearby allies."},
    {id: 11, name: "Viper - Snake Bite", price: 400, location: "Valorant Training Grounds", details: "Launches a chemical grenade that creates damaging pool."},
    {id: 12, name: "Viper - Toxic Screen", price: 500, location: "Valorant Training Grounds", details: "Deploys a wall of poisonous gas."},
    {id: 13, name: "Omen - Shrouded Step", price: 350, location: "Valorant Training Grounds", details: "Teleports a short distance."},
    {id: 14, name: "Omen - Dark Cover", price: 400, location: "Valorant Training Grounds", details: "Deploys a spherical smoke that blocks vision."},
    {id: 15, name: "Killjoy - Nanoswarm", price: 300, location: "Valorant Training Grounds", details: "Throws grenade that explodes into damaging nanobots."},
    {id: 16, name: "Killjoy - Lockdown", price: 500, location: "Valorant Training Grounds", details: "Deploys a device that detains enemies in its radius."},
    {id: 17, name: "Cypher - Spycam", price: 350, location: "Valorant Training Grounds", details: "Places a camera that can see enemies."},
    {id: 18, name: "Cypher - Trapwire", price: 400, location: "Valorant Training Grounds", details: "Deploys a line that restrains and reveals enemies."},
    {id: 19, name: "Raze - Boom Bot", price: 300, location: "Valorant Training Grounds", details: "Sends a robot that chases enemies and explodes."},
    {id: 20, name: "Raze - Paint Shells", price: 450, location: "Valorant Training Grounds", details: "Throws grenade that explodes into multiple grenades."},
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
}
