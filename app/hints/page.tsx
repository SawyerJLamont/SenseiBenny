import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HintsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Conjugation Hints</h1>
          <Link href="/">
            <Button variant="outline">Back to Practice</Button>
          </Link>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="ru-verbs">
            <AccordionTrigger>る (Ru) Verbs</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardHeader>
                  <CardTitle>る Verb Conjugation Pattern</CardTitle>
                  <CardDescription>Remove る and add the appropriate ending</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Form</TableHead>
                        <TableHead>Ending</TableHead>
                        <TableHead>Example (食べる)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Present Affirmative</TableCell>
                        <TableCell>ます</TableCell>
                        <TableCell>食べます</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Present Negative</TableCell>
                        <TableCell>ません</TableCell>
                        <TableCell>食べません</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Past Affirmative</TableCell>
                        <TableCell>ました</TableCell>
                        <TableCell>食べました</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Past Negative</TableCell>
                        <TableCell>ませんでした</TableCell>
                        <TableCell>食べませんでした</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Te Form</TableCell>
                        <TableCell>て</TableCell>
                        <TableCell>食べて</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="u-verbs">
            <AccordionTrigger>う (U) Verbs</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardHeader>
                  <CardTitle>う Verb Conjugation Pattern</CardTitle>
                  <CardDescription>Change the final う sound and add the appropriate ending</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Form</TableHead>
                        <TableHead>Change</TableHead>
                        <TableHead>Example (書く)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Present Affirmative</TableCell>
                        <TableCell>う → います</TableCell>
                        <TableCell>書きます</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Present Negative</TableCell>
                        <TableCell>う → いません</TableCell>
                        <TableCell>書きません</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Past Affirmative</TableCell>
                        <TableCell>う → いました</TableCell>
                        <TableCell>書きました</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Past Negative</TableCell>
                        <TableCell>う → いませんでした</TableCell>
                        <TableCell>書きませんでした</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Te Form</TableCell>
                        <TableCell>く → いて</TableCell>
                        <TableCell>書いて</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="irregular">
            <AccordionTrigger>Irregular Verbs</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardHeader>
                  <CardTitle>Common Irregular Verbs</CardTitle>
                  <CardDescription>These verbs follow their own unique patterns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">する (To Do)</h4>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Present Affirmative</TableCell>
                          <TableCell>します</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Present Negative</TableCell>
                          <TableCell>しません</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Past Affirmative</TableCell>
                          <TableCell>しました</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Past Negative</TableCell>
                          <TableCell>しませんでした</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Te Form</TableCell>
                          <TableCell>して</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">来る (To Come)</h4>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Present Affirmative</TableCell>
                          <TableCell>きます</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Present Negative</TableCell>
                          <TableCell>きません</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Past Affirmative</TableCell>
                          <TableCell>きました</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Past Negative</TableCell>
                          <TableCell>きませんでした</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Te Form</TableCell>
                          <TableCell>きて</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tips">
            <AccordionTrigger>Study Tips</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardHeader>
                  <CardTitle>Tips for Mastering Conjugations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 list-disc list-inside">
                    <li>Start with a small set of common verbs and master their patterns</li>
                    <li>Practice one conjugation type at a time until comfortable</li>
                    <li>Use the "Specific Practice" mode to focus on challenging forms</li>
                    <li>Switch between writing systems to reinforce learning</li>
                    <li>Try to understand the pattern rather than memorizing each form</li>
                    <li>Use the Te Form as a base for learning other conjugations</li>
                    <li>Practice speaking the conjugations out loud</li>
                  </ul>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}

