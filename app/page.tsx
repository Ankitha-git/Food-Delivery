"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface FormData {
  email: string
  password: string
  keepLoggedIn: boolean
}
 
function FoodDeliveryApp() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    keepLoggedIn: false
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    router.push('/food-delivery-app')
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Login Section */}
      <div className="w-full lg:w-1/2 min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 relative">
          <h1 className="text-2xl absolute top-0 left-0 p-8">
            Food <span className="text-blue-600">delivery</span>
          </h1>

          <h2 className="text-4xl font-bold mb-4 text-center mt-12">Login</h2>
          <p className="text-muted-foreground mb-8 text-center">
            Sign in with your data that you entered during your registration.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="min. 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="keep-logged-in"
                checked={formData.keepLoggedIn}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, keepLoggedIn: checked as boolean })
                }
              />
              <Label 
                htmlFor="keep-logged-in" 
                className="text-sm cursor-pointer"
              >
                Keep me logged in
              </Label>
            </div>

            <Button 
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700" 
              size="lg"
            >
              Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="#" className="text-blue-600 hover:underline">
              Forgot password
            </Link>
          </div>

          <div className="mt-6 text-center text-muted-foreground">
            Dont have an account?{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col relative">
        {/* Rating Section Image - Left */}
        <div className="absolute top-8 left-8">
          <Image 
            src="/rating-section.jpg"
            alt="Rating Section"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Roll Set Image - Right */}
        <div className="absolute top-8 right-8">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[280px]">
            <div className="flex gap-4">
              <Image 
                src="/roll-set.jpg"
                alt="Roll Set"
                width={100}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  Roll set
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Lorem ipsum dolor sit amet, magna scaevola his ei.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">$ 22.56</span>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nigiri Set Image - Center Right */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[280px]">
            <div className="flex gap-4">
              <Image 
                src="/nigiri.jpg"
                alt="Nigiri Set"
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Nigiri set</h3>
                <p className="text-sm text-gray-600">
                  Ea his sensibus eleifend, mollis iudicabit omittantur id mel.
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">$ 16.80</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span>1</span>
                      <span className="text-gray-400">+</span>
                    </div>
                    <button className="text-blue-600 text-sm">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white py-8 px-4 mt-auto">
          <h2 className="text-3xl font-bold mb-4">Leave reviews for all meals</h2>
          <p className="max-w-md mx-auto text-white/80 mb-8">
            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDeliveryApp;

