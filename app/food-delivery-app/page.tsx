"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Search, ShoppingBag, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function FoodDeliveryApp() {
  const [activeCategory, setActiveCategory] = useState('Pizza')

  const categories = [
    { id: 'pizza', label: 'Pizza', icon: '🍕' },
    { id: 'burger', label: 'Burger', icon: '🍔' },
    { id: 'bbq', label: 'BBQ', icon: '🍖' },
    { id: 'sushi', label: 'Sushi', icon: '🍣' },
    { id: 'vegan', label: 'Vegan', icon: '🥬' },
    { id: 'desserts', label: 'Desserts', icon: '🧁' },
  ]

  const restaurants = [
    {
      id: 1,
      name: 'Royal Sushi House',
      image: '/sushi-1.jpg?height=40&width=60',
      time: '30-40 min',
      minSum: '$32 min sum',
      categories: ['Sushi'],
      featured: true
    },
    {
      id: 2,
      name: 'Burgers & Pizza',
      image: '/pizza-burgers.jpg?height=40&width=60',
      time: '40-60 min',
      minSum: '$24 min sum',
      categories: ['Burger', 'Pizza'],
      featured: true
    },
    {
      id: 3,
      name: 'Ninja sushi',
      image: '/ninja-sushi.jpg?height=40&width=60',
      time: '20-40 min',
      minSum: '$40 min sum',
      categories: ['Sushi'],
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold">
                Food <span className="text-blue-600">delivery</span>
              </h1>
              <div className="relative hidden md:block">
                <Input
                  className="w-[300px] bg-gray-50"
                  placeholder="Search"
                  type="search"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <Button variant="ghost">Restaurants</Button>
                <Button variant="ghost">Deals</Button>
                <Button variant="ghost">My orders</Button>
              </nav>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
                    4
                  </Badge>
                </Button>
                <Image
                  src="/photo-1.jpg?height=32&width=32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Promotional Banners */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#F3F4FF] p-6 flex items-center">
            <div>
              <h3 className="text-2xl font-bold absolute right-40 -top-1  mb-2">All deserts</h3>
              <p className="text-5xl font-bold text-blue-600 absolute right-20  ">20% OFF</p>
              <p className="text-muted-foreground absolute right-40 -bottom-0">Deserty</p>
            </div>
            <Image
              src="/chocolate.jpg?height=200&width=300"
              alt="Dessert"
              width={300}
              height={200}
              className="absolute -left-1 -bottom-2  w-50 h-48 object-cover "
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[#FFF3ED] p-6 flex items-center">
            <div>
              <h3 className="text-2xl font-bold absolute  mb-2">Big Burgers</h3>
              <p className="text-5xl font-bold text-orange-500 mb-4">50% OFF</p>
              <p className="text-muted-foreground">Foodies</p>
            </div>
            <Image
              src="/burgers-1.jpg?height=200&width=300"
              alt="Burger"
              width={300}
              height={200}
              className="absolute -left-1 -bottom-2 w-50 h-48 object-cover"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.label ? "default" : "outline"}
              className="flex items-center gap-8 whitespace-nowrap"
              onClick={() => setActiveCategory(category.label)}
            >
              <span className="text-xl">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>

        {/* Nearby Restaurants */}
        <h2 className="text-2xl font-bold mb-6">Nearby restaurants</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {restaurant.featured && (
                  <Badge className="absolute left-4 top-4 bg-blue-600">
                    FEATURED
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 bg-white/50 backdrop-blur-sm hover:bg-white/75"
                >
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{restaurant.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>⏰ {restaurant.time}</span>
                  <span>•</span>
                  <span>{restaurant.minSum}</span>
                </div>
                <div className="mt-2 flex gap-2">
                  {restaurant.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}