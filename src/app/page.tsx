'use client'

import { SignOutButton } from '@clerk/nextjs'
import { ArrowLeft, ChevronRight, Plus, Volume1, Volume2 } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Radio } from '@/components/ui/radio-group'
import { Select } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Tag } from '@/components/ui/tag'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <main className='container space-y-12 py-6'>
      <header className='flex items-center justify-between gap-4'>
        <SignOutButton>
          <Button>
            <ArrowLeft className='size-4' />
            Sign out
          </Button>
        </SignOutButton>
        <div className='flex items-center gap-2'>
          Theme:
          <ThemeToggle />
        </div>
      </header>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold'>Form</h2>
        <div className='grid grid-cols-[8rem_1fr] gap-y-6'>
          <span className='self-center'>Text Input</span>
          <div className='space-y-1'>
            <Label htmlFor='input'>Label</Label>
            <div className='flex gap-2'>
              <Input
                id='input'
                placeholder='Placeholder here'
              />
              <Button className='shadow-none'>Button</Button>
            </div>
          </div>

          <span className='self-center'>Select</span>
          <Select.Root>
            <Select.Trigger>
              <Select.Value placeholder='Choose an option' />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Group title</Select.Label>
                <Select.Item value='opt-1'>First option</Select.Item>
                <Select.Item value='opt-2'>Second option</Select.Item>
                <Select.Item value='opt-3'>Third option</Select.Item>
                <Select.Item value='opt-4'>Fourth option</Select.Item>
                <Select.Item value='opt-5'>Fifth option</Select.Item>
                <Select.Item value='opt-6'>Sixth option</Select.Item>
              </Select.Group>
              <Select.Group>
                <Select.Label>Group title</Select.Label>
                <Select.Item value='opt-7'>First option</Select.Item>
                <Select.Item value='opt-8'>Second option</Select.Item>
                <Select.Item value='opt-9'>Third option</Select.Item>
                <Select.Item value='opt-10'>Fourth option</Select.Item>
                <Select.Item value='opt-11'>Fifth option</Select.Item>
                <Select.Item value='opt-12'>Sixth option</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>

          <span className='self-center'>Radio Group</span>
          <Radio.Group
            defaultValue='radio-one'
            className='flex gap-4'
          >
            <Radio.Wrapper>
              <Radio.Item
                value='radio-one'
                id='radio-one'
              />
              <Radio.Label htmlFor='radio-one'>One</Radio.Label>
            </Radio.Wrapper>
            <Radio.Wrapper>
              <Radio.Item
                value='radio-two'
                id='radio-two'
              />
              <Radio.Label htmlFor='radio-two'>Two</Radio.Label>
            </Radio.Wrapper>
            <Radio.Wrapper>
              <Radio.Item
                value='radio-disabled'
                id='radio-disabled'
                disabled
              />
              <Radio.Label htmlFor='radio-disabled'>Disabled</Radio.Label>
            </Radio.Wrapper>
          </Radio.Group>

          <span className='self-center'>Checkbox</span>
          <div className='flex flex-wrap gap-x-8 gap-y-4'>
            <Checkbox.Root>
              <Checkbox.Mark id='checkbox-unchecked' />
              <Checkbox.Label htmlFor='checkbox-unchecked'>
                Unchecked
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root>
              <Checkbox.Mark
                id='checkbox-checked'
                defaultChecked
              />
              <Checkbox.Label htmlFor='checkbox-checked'>
                Checked
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root>
              <Checkbox.Mark
                id='disabled'
                disabled
              />
              <Checkbox.Label htmlFor='disabled'>Disabled</Checkbox.Label>
            </Checkbox.Root>
          </div>

          <span className='self-center'>Switch</span>
          <div className='flex flex-wrap gap-x-8 gap-y-4'>
            <Switch.Root>
              <Switch.Toogle id='switch' />
              <Switch.Label htmlFor='switch'>Unchecked</Switch.Label>
            </Switch.Root>
            <Switch.Root>
              <Switch.Toogle
                id='switch-checked'
                defaultChecked
              />
              <Switch.Label htmlFor='switch-checked'>Checked</Switch.Label>
            </Switch.Root>
            <Switch.Root>
              <Switch.Toogle
                id='switch-disabled'
                disabled
              />
              <Switch.Label htmlFor='switch-disabled'>
                Switch disabled
              </Switch.Label>
            </Switch.Root>
          </div>

          <span className='self-center'>Slider</span>
          <div className='flex gap-8'>
            <Slider.Wrapper>
              <Volume1 className='text-foreground/90' />
              <Slider.Selector
                defaultValue={[35]}
                max={100}
                step={1}
              />
              <Volume2 className='text-foreground/90' />
            </Slider.Wrapper>
            <Slider.Selector
              defaultValue={[75]}
              max={100}
              step={1}
              disabled
            />
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold'>Buttons</h2>
        <div className='grid grid-cols-[5rem_1fr] gap-y-4'>
          <span className='self-center'>Small</span>
          <div className='flex flex-wrap items-center gap-2'>
            <Button
              variant='default'
              size='sm'
            >
              <Plus className='size-3.5' />
              Primary
              <ChevronRight className='size-3.5' />
            </Button>
            <Button
              variant='secondary'
              size='sm'
            >
              <Plus className='size-3.5' />
              Secondary
              <ChevronRight className='size-3.5' />
            </Button>
            <Button
              variant='outline'
              size='sm'
            >
              <Plus className='size-3.5' />
              Outline
              <ChevronRight className='size-3.5' />
            </Button>
            <Button
              variant='muted'
              size='sm'
            >
              <Plus className='size-3.5' />
              Muted
              <ChevronRight className='size-3.5' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
            >
              <Plus className='size-3.5' />
              Ghost
              <ChevronRight className='size-3.5' />
            </Button>
            <Button
              variant='destructive'
              size='sm'
            >
              <Plus className='size-3.5' />
              Destructive
              <ChevronRight className='size-3.5' />
            </Button>
          </div>

          <span className='self-center'>Default</span>
          <div className='flex flex-wrap items-center gap-2'>
            <Button variant='default'>
              <Plus className='size-4' />
              Primary
              <ChevronRight className='size-4' />
            </Button>
            <Button variant='secondary'>
              <Plus className='size-4' />
              Secondary
              <ChevronRight className='size-4' />
            </Button>
            <Button variant='outline'>
              <Plus className='size-4' />
              Outline
              <ChevronRight className='size-3.5' />
            </Button>
            <Button variant='muted'>
              <Plus className='size-4' />
              Muted
              <ChevronRight className='size-4' />
            </Button>
            <Button variant='ghost'>
              <Plus className='size-4' />
              Ghost
              <ChevronRight className='size-4' />
            </Button>
            <Button variant='destructive'>
              <Plus className='size-4' />
              Destructive
              <ChevronRight className='size-4' />
            </Button>
          </div>

          <span className='self-center'>Large</span>
          <div className='flex flex-wrap items-center gap-2'>
            <Button
              variant='default'
              size='lg'
            >
              <Plus className='size-5' />
              Primary
              <ChevronRight className='size-5' />
            </Button>
            <Button
              variant='secondary'
              size='lg'
            >
              <Plus className='size-5' />
              Secondary
              <ChevronRight className='size-5' />
            </Button>
            <Button
              variant='outline'
              size='lg'
            >
              <Plus className='size-5' />
              Outline
              <ChevronRight className='size-5' />
            </Button>
            <Button
              variant='muted'
              size='lg'
            >
              <Plus className='size-5' />
              Muted
              <ChevronRight className='size-5' />
            </Button>
            <Button
              variant='ghost'
              size='lg'
            >
              <Plus className='size-5' />
              Ghost
              <ChevronRight className='size-5' />
            </Button>
            <Button
              variant='destructive'
              size='lg'
            >
              <Plus className='size-5' />
              Destructive
              <ChevronRight className='size-5' />
            </Button>
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold'>Tags</h2>
        <div className='grid grid-cols-[5rem_1fr] gap-y-4'>
          <span className='self-center'>Small</span>
          <div className='flex flex-wrap items-center gap-2'>
            <Tag
              variant='primary'
              size='sm'
            >
              Primary
            </Tag>
            <Tag
              variant='secondary'
              size='sm'
            >
              Secondary
            </Tag>
            <Tag
              variant='tertiary'
              size='sm'
            >
              Tertiary
            </Tag>
            <Tag
              variant='quaternary'
              size='sm'
            >
              Quaternary
            </Tag>
          </div>

          <span className='self-center'>Default</span>
          <div className='flex flex-wrap items-center gap-2'>
            <Tag variant='primary'>Primary</Tag>
            <Tag variant='secondary'>Secondary</Tag>
            <Tag variant='tertiary'>Tertiary</Tag>
            <Tag variant='quaternary'>Quaternary</Tag>
          </div>

          <span className='self-center'>Large</span>
          <div className='flex flex-wrap items-center gap-2'>
            <Tag
              variant='primary'
              size='lg'
            >
              Primary
            </Tag>
            <Tag
              variant='secondary'
              size='lg'
            >
              Secondary
            </Tag>
            <Tag
              variant='tertiary'
              size='lg'
            >
              Tertiary
            </Tag>
            <Tag
              variant='quaternary'
              size='lg'
            >
              Quaternary
            </Tag>
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold'>Profile</h2>
        <div className='grid grid-cols-[5rem_1fr] gap-y-4'>
          <span className='self-center'>Avatar</span>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='text-center'>
              <Avatar.Root
                isMaster
                className='size-16'
              >
                <Avatar.Image src='https://github.com/julianosill.png' />
                <Avatar.Fallback>JU</Avatar.Fallback>
              </Avatar.Root>
              <span className='text-sm'>Master</span>
            </div>
            <div className='text-center'>
              <Avatar.Root className='size-16'>
                <Avatar.Image src='https://github.com/julianosill.png' />
                <Avatar.Fallback>JU</Avatar.Fallback>
              </Avatar.Root>
              <span className='text-sm'>Player</span>
            </div>
            <div className='text-center'>
              <Avatar.Root className='size-16'>
                <Avatar.Image src='null' />
                <Avatar.Fallback className='text-2xl'>JU</Avatar.Fallback>
              </Avatar.Root>
              <span className='text-sm'>Fallback</span>
            </div>
          </div>
        </div>

        <h2 className='text-2xl font-semibold'>Cards</h2>
        <div className='grid grid-cols-[7rem_1fr] gap-y-4'>
          <span className='self-center'>Bio</span>
          <Card.Wrapper variant='outline'>
            <p className='text-sm text-foreground/60'>
              Culpa eu quis do commodo adipisicing est ipsum Lorem sint est elit
              nisi aliqua nisi. Cupidatat minim labore nostrud nostrud
              reprehenderit laboris magna reprehenderit reprehenderit ipsum.
              Nostrud amet mollit cupidatat labore officia nisi ex consequat
              proident Lorem magna in enim sunt. Dolore exercitation consectetur
              nostrud id id incididunt amet ut occaecat. Nisi minim velit anim
              deserunt adipisicing ipsum est. Aliquip exercitation fugiat culpa
              nostrud incididunt reprehenderit sit elit excepteur ea mollit
              aliquip. Voluptate est ullamco ut nisi ullamco duis labore irure
              ea sit eiusmod officia aliquip. Occaecat in minim id eiusmod velit
              sint consectetur laboris deserunt ex. Sint et id qui occaecat
              fugiat cillum aliquip enim non. Ea mollit sunt sint officia
              laboris sit duis fugiat aute dolore ut sunt ipsum. Dolore magna
              consequat occaecat adipisicing duis ullamco.
            </p>
          </Card.Wrapper>
          <span className='self-center'>Status card</span>
          <div className='flex items-center justify-center rounded-2xl bg-foreground/10 p-8'>
            <Card.Wrapper className='flex max-w-md flex-col items-center gap-2 px-8 text-center'>
              <Card.Title>Card title</Card.Title>
              <p>
                Aliquip exercitation fugiat culpa nostrud incididunt
                reprehenderit
              </p>
              <Button className='mt-2'>Button</Button>
            </Card.Wrapper>
          </div>
        </div>
      </section>
    </main>
  )
}
