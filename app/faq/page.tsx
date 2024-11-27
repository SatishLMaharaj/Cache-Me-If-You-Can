"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from '@/lib/faq-data';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter the FAQs based on the search query and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from the FAQs
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  return (
    <div className="container pl-6 pb-6 space-y-8">
      <h1 className="text-3xl font-bold">
        Frequently Asked Questions
      </h1>

      <div className="mb-8 flex gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search FAQs..."
            className="w-full pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Category Filter Dropdown */}
        <div className="flex-shrink-0">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category, index) => (
                <SelectItem key={index} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card rounded-lg border px-4"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose dark:prose-invert max-w-none pb-4">
              {faq.answer.split('\n\n').map((paragraph, i) => (
                <p key={i} className="whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filteredFaqs.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No FAQs found matching your search or category.
        </div>
      )}
    </div>
  );
}
